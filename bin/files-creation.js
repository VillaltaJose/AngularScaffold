const fs = require('fs')
const { angularCli } = require('./angular-cli')

const CLI = require('clui');
const Spinner = CLI.Spinner;

const run = (nombre, dir) => {
	console.log('')
	const status = new Spinner('Creando el proyecto base...');
	status.start();

	if(!fs.existsSync(`${dir}/${nombre}`)) {
		fs.mkdirSync(`${dir}/${nombre}`);
	}
	
	status.stop()
	angularCli(dir, nombre)
	
}

module.exports = {
	run: run
}