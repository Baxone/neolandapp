const db = require('../db')



exports.getByFecha = (fecha, done) =>{

	db.get().query('SELECT * FROM asistencia WHERE fecha = ?', [fecha], (err, rows)=>{

		if(err) console.log(err)
		done(null,rows)

	})

}
exports.insertarAsistencia = ({fecha, fk_id_clase, fk_id_alumno}, done) =>{

	db.get().query('INSERT INTO asistencia VALUES (null,? , ?, ? )', [fecha, fk_id_clase, fk_id_alumno], (err, rows)=>{

		if(err) console.log(err)
		done(null,rows)

	})
}