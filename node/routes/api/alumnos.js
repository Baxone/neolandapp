var express = require('express');
var router = express.Router();
const alumnosModel = require('../../models/alumnosmodel')
// const clasesModel = require('../../models/clasesmodel')


router.get('/', function(req, res, next) {
	console.log(res)
	res.json(req.body)
});

router.get('/byClase',(req, res) =>{

	// cambiar clase por la recibida en el req.body
	let idClase = 1
	alumnosModel.getAlumnosByClase( idClase, (err, rows )=>{

		if(err) console.log(err)
		res.json(rows)

	})


} )
	

module.exports = router;
