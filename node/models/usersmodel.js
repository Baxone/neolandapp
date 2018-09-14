const db = require('../db')


exports.login = ({alias, pass}, done)=>{


	db.get().query( 'SELECT * FROM usuarios WHERE alias = ? AND pass = SHA1(?)',[alias, pass], (err, rows)=>{

		if(err) console.log(err)

		done(null, rows)

	})

}