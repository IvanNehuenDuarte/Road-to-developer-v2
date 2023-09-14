const TABLA = "clientes";

module.exports = function(dbinyectada) { 

  let db = dbinyectada;

  if (!db) {
    db = require("../../DB/mysql");
  }

  function all() {
    return db.all(TABLA);
  }
  
  function one(id) {
    return db.all(TABLA, id);
  }
  
  function add(body) {
    return db.add(TABLA, body);
  }
  
  function remove(body) {
    return db.remove(TABLA, body);
  }

  return{
    all,
    one,
    add,
    remove
  }
};
