const db = require('../db')



exports.getByFecha = (fecha, done) =>{

	db.get().query('SELECT asistencia.*, alumnos.*  FROM asistencia, alumnos WHERE fecha = ? AND asistencia.`fk_id_alumno` = alumnos.id', [fecha], (err, rows)=>{

		if(err) console.log(err)
		done(null,rows)

	})

}
exports.insertarAsistencia = ({fecha, alumno, estadoFalta}, done) =>{

		
	db.get().query('INSERT INTO asistencia VALUES (null,? , ?, ?, ? )', [fecha, alumno.fk_clase, alumno.id, estadoFalta], (err, rows)=>{

		if(err) console.log(err)
		done(null,rows)

	})
}

exports.actualizarAsistencia = ({estadoFalta, alumno, fecha}, done)=>{

	db.get().query("UPDATE asistencia SET  estado = ? WHERE fecha = ? AND fk_id_clase= ? AND `fk_id_alumno`= ?", [estadoFalta, fecha,alumno.fk_clase, alumno.id], (err, rows)=>{

		if(err) console.log(err)
			done(null, rows)

	})

}




