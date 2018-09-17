var express = require('express');
var router = express.Router();
const asistenciaModel = require('../../models/asistenciamodel')

// http://localhost:3000/api/asistencia
router.get('/',(req, res)=>{

	console.log('eeee')

})


router.post('/fecha', (req, res)=>{
	asistenciaModel.getByFecha(req.body.fecha, (err, rows)=>{

		if(err) console.log(err)
		res.json(rows)


		// --------Verificar si existe el dia y si no crearlo----
		// if(rows.length == 0){
		// 	asistenciaModel.insertarAsistencia(campos, (err, rows) =>{
		// 		if(err) console.log(err)
		// 			res.json(rows)
		// 	})
		// }
	})

})

router.post('/faltas', (req, res)=>{
	let faltas = req.body.faltas
	let fecha = new Date().toISOString().split('T', 1)
	fecha = fecha[0]
	let i = 0

	faltas.forEach((item)=>{
		asistenciaModel.insertarAsistencia({fecha: fecha, alumno: req.body.alumnos[i], estadoFalta: faltas[i]}, (err, rows)=>{

			if(err) console.log(err)

		})
		i++

	})
	res.json({correcto: 'correcto'})



})

router.post('/actualizar', (req, res)=>{
	let faltas = req.body.faltas
	let alumnos = req.body.alumnos
	let fecha = req.body.fecha
	let i = 0
	faltas.forEach((item)=>{

		asistenciaModel.actualizarAsistencia({estadoFalta: faltas[i], alumno: alumnos[i], fecha: fecha}, (err, rows)=>{

			if(err) console.log(err)


		})
		i++
	})
	res.json({correcto: 'correcto'})


})


module.exports = router;
