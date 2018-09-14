var express = require('express');
var router = express.Router();



let alumnosRouter = require('./api/alumnos')
router.use('/alumnos', alumnosRouter)


let clasesRouter = require('./api/clases')
router.use('/clases', clasesRouter)

let asistenciaRouter = require('./api/asistencia')
router.use('/asistencia', asistenciaRouter)

module.exports = router;
