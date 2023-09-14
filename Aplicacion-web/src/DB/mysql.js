const mysql = require("mysql");
const config = require("../config");

const dbConfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

let conexion;

function conMysql() {
  conexion = mysql.createConnection(dbConfig);

  conexion.connect((err) => {
    if (err) {
      console.log("[db err]", err);
      setTimeout(conMysql, 200);
    } else {
      console.log("Database connection established");
    }
  });

  conexion.on("error", (err) => {
    console.log("[db err]", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      conMysql();
    } else {
      throw err;
    }
  });
}

conMysql();

function all(tabla) {
  return new Promise((resolve, reject) => {
    conexion.query(`SELECT * FROM ${tabla}`, (err, result) => {
      return err ? reject(err) : resolve(result);
    });
  });
}

function one(tabla, id) {
  return new Promise((resolve, reject) => {
    conexion.query(`SELECT * FROM ${tabla} WHERE id = ${id}`, (err, result) => {
      return err ? reject(err) : resolve(result);
    });
  });
}

function add(tabla, data) {
  return new Promise((resolve, reject) => {
    conexion.query(`INSERT INTO ${tabla} SET ? ON DUPLICATE KEY UPDATE ?`, [data, data], (err, result) => {
      return err ? reject(err) : resolve(result);
    });
  });
}

function remove(tabla, data) {
  return new Promise((resolve, reject) => {
    conexion.query(`DELETE FROM ${tabla} WHERE id = ?`, data.id, (err, result) => {
      return err ? reject(err) : resolve(result);
    });
  });
}

function query(tabla, consulta) {
  return new Promise((resolve, reject) => {
    conexion.query(`SELECT * FROM ${tabla} WHERE ?`, consulta, (err, result) => {
      return err ? reject(err) : resolve(result[0]);
    });
  });
}

module.exports = {
  all,
  one,
  add,
  remove,
  query
};
