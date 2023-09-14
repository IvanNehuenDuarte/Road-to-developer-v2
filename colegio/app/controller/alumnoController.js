const Alumno = require('../model/Alumno');

class AlumnoController{
    async guardar(req, res){
        const body = req.body;

        const alumno = new Alumno(body.nro_documento, body.apellidos, body.nombres, body.fecha_nacimiento, body.grado, body.seccion);
        const res_guardar = await alumno.guardar()

        console.log(res_guardar);

        res.json(res_guardar)
    }

    async listar(req, res){
        let nro_documento = req.params.nro_documento;

        nro_documento = !nro_documento ? '' : nro_documento;

        res.json(await Alumno.listar(nro_documento));
    }
}

module.exports = new AlumnoController();