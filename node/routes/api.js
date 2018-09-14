var express = require('express');
var router = express.Router();
const userModel = require('../models/usersmodel')
const utils = require('../utils')

let alumnosRouter = require('./api/alumnos')
router.use('/alumnos', alumnosRouter)


let clasesRouter = require('./api/clases')
router.use('/clases', clasesRouter)

let asistenciaRouter = require('./api/asistencia')
router.use('/asistencia', asistenciaRouter)


// localhost:3000/api/login
router.post('/login', (req, res)=>{
	
	userModel.login(req.body, (err, rows)=>{
		if(rows.length == 0){
			
			res.json({alias: 'fail'})

		}else{
			let tokenStr = utils.generarToken()
			res.json({alias: rows[0].alias, token: tokenStr})
		}
		

	})
	
})

module.exports = router;
