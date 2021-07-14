const { exec } = require('child_process')

module.exports = {
	exec: (command) => {
		return new Promise((resolve, reject) => {
			exec(command, (error, stoudt, stderr) => {
				if(error) {
					reject(error);
				}

				resolve(stoudt, stderr);
			})
		})
	},
	makeId: (ancho) => {
		let result = '';
		let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		let charactersLength = characters.length;
		for (let i = 0; i < ancho; i++) {
			result += characters.charAt(Math.floor(Math.random() *
				charactersLength));
		}
		return result;
	}
}