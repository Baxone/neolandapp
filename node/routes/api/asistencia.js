var express = require('express');
var router = express.Router();
const asistenciaModel = require('../../models/asistenciamodel')

// http://localhost:3000/api/asistencia
router.get('/',(req, res)=>{

	console.log('eeee')

})


router.get('/fecha/:fecha', (req, res)=>{
	asistenciaModel.getByFecha(req.params.fecha, (err, rows)=>{

		console.log(rows.length)
		let campos = {fecha: req.params.fecha, fk_id_clase: 1, fk_id_alumno: 2}

		if(rows.length == 0){
			asistenciaModel.insertarAsistencia(campos, (err, rows) =>{

				if(err) console.log(err)
				res.json(rows)

			})
		}


	})

})


module.exports = router;
