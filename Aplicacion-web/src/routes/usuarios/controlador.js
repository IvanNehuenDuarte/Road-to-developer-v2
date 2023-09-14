const TABLA = "usuarios";

const auth = require('../auth');

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
  
  async function add(body) {
    const usuario = {
      id: body.id,
      name: body.name,
      active: body.active
    }

    const respuesta = await db.add(TABLA, usuario);

  let insertId = 0;
  if (body.id == 0) {
    insertId = respuesta.insertId;
  } else {
    insertId = body.id;
  }

  let respuesta2 = '';
  if (body.usuario || body.password) {
    respuesta2 = await auth.add({
      id: insertId,
      user: body.user,
      password: body.password
    })
  }

  return respuesta2;
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
