const router = require('express').Router();
const router_alumno = require('./alumno');

router.use('/alumno', router_alumno);

module.exports = router;