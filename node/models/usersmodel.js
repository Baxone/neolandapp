const db = require('../db')


exports.login = ({alias, password}, done)=>{


	db.get().query( 'SELECT * FROM usuarios WHERE alias = ? AND pass = SHA1(?)',[alias, password], (err, rows)=>{

		if(err) console.log(err)

		done(null, rows)

	})

}