const router = require('express').Router();
const AlumnoController = require('../controller/alumnoController');

router.post('/', AlumnoController.guardar);
router.get('/', AlumnoController.listar);
router.get('/:nro_documento', AlumnoController.listar);

module.exports = router;