const db = require("../src/db");

class Alumno {
  constructor(
    nro_documento,
    apellidos,
    nombres,
    fecha_nacimiento,
    grado,
    seccion
  ) {
    this.nro_documento = nro_documento;
    this.apellidos = apellidos;
    this.nombres = nombres;
    this.fecha_nacimiento = fecha_nacimiento;
    this.grado = grado;
    this.seccion = seccion;
  }

  async guardar() {
    const query = `INSERT INTO Alumno(nroDocumento, apellidos, nombres, fechaNacimiento, grado, seccion) 
        VALUES
        (
            '${this.nro_documento}', 
            '${this.apellidos}', 
            '${this.nombres}', 
            '${this.fecha_nacimiento}', 
            '${this.grado}', 
            '${this.seccione}'
        )`;

    return await db.ejecutar(query);
  }

  static async listar(nro_documento) {
    const query = `SELECT * FROM Alumno WHERE nroDocumento like '%${nro_documento}';`;

    return await db.listar(query, true);
  }
}

module.exports = Alumno;
