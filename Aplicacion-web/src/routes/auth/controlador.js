const bcrypt = require('bcrypt');
const auth = require('../../auth');
const TABLA = "auth";

module.exports = function (dbinyectada) {
  let db = dbinyectada;

  if (!db) {
    db = require("../../DB/mysql");
  }

  async function login(usuario, password) {
    const data = await db.query(TABLA, {user: usuario});

    return bcrypt.compare(password, data.password)
    .then(resultado => {
      if (resultado === true) {
        // generar un token
        return auth.asignarToken({...data})
      }else {
        throw new Error('Información invalida')
      }
    })
  }

  async function add(data) {
    const authData = {
      id: data.id,
    };

    if (data.user) {
      authData.user = data.user;
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password.toString(), 5);
    }

    return db.add(TABLA, authData);
  }

  return {
    add,
    login,
  };
};
