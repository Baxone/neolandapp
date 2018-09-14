var express = require('express');
var router = express.Router();
const clasesModel = require('../../models/clasemodel')


// localhost:3000/api/clases
router.get('/', function(req, res, next) {
	
	clasesModel.getAll((err, rows)=>{

		if(err) console.log(err)
		res.json(rows)

	})
});

// localhost:3000/api/clases/estado/:estado
router.get('/estado/:estado', (req, res)=>{
	clasesModel.byEstado(req.params.estado, (err, rows)=>{
		if(err) console.log(err)
		res.json(rows)

	})

})

router.get('/ciudad/:ciudad', (req, res)=>{

	clasesModel.byCiudad(req.params.ciudad, (err, rows)=>{

		if(err) console.log(err)
		res.json(rows)

	})

})


module.exports = router;
