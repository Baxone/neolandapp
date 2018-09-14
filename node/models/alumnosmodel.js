const db = require('../db')


exports.getAlumnosByClase = (clase, done) =>{

	db.get().query('SELECT * FROM alumnos WHERE fk_clase = ?',[clase], (err, rows)=>{

		if(err) console.log(err)
		done(null, rows)

	})

}


