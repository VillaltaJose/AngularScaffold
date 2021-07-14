const fs = require('fs')
const chalk = require('chalk')
const { exec, makeId } = require('./lib/exec');
const { readFile, insertText } = require('./lib/files');

const CLI = require('clui');
const Spinner = CLI.Spinner;

const okMessage = (message) => console.log(`${chalk.green('✔️')} ${chalk.white(message)}`)
const errMessage = (message, err) => {
	console.log(`${chalk.red('✗')} ${chalk.white(message)}`)
	console.log(chalk.red(err))
}

const run = (nombre, dir) => {
	console.log('')
	const status = new Spinner('Creando el proyecto base...');
	status.start();

	if(!fs.existsSync(`${dir}/${nombre}`)) {
		fs.mkdirSync(`${dir}/${nombre}`);
	}
	
	exec(`dotnet new sln --output ${dir}/${nombre} --name ${nombre}`)
	.then(() => {
		status.stop()
		okMessage('Proyecto base')
		// apiLibrary(`${dir}/${nombre}`, nombre);
	})
	.catch((error) => {
		status.stop()
		errMessage('Creación del proyecto base', error)
	})
	
}

module.exports = {
	run: run
}