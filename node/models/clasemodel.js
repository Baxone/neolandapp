const db = require('../db')


exports.getAll = (done) =>{

	db.get().query('SELECT * FROM clases', (err, rows)=>{

		if(err) console.log(err)
		done(null, rows)

	})

}

exports.byEstado = (estado, done) =>{

	db.get().query('SELECT * FROM clases WHERE estado = ?', [estado], (err, rows)=>{

		if(err) console.log(err)
		done(null, rows)

	})

}

exports.byCiudad = (ciudad, done) =>{

	db.get().query('SELECT * FROM clases WHERE ciudad = ?', [ciudad], (err, rows)=>{

		if(err) console.log(err)
		done(null, rows)

	})

}