var express = require('express');
var router = express.Router();
const usersModel = require('../models/usersmodel')


router.get('/', (req, res)=>{
	
	let usuario = {alias: "admin" , pass: 12345}

	usersModel.login(usuario, (err, rows)=>{
		console.log(rows)
		res.json(rows)

	})

})




module.exports = router;
