const files = require('./lib/files');
const chalk = require('chalk');
const inquirer = require('inquirer');
const fileCreation = require('./files-creation');


const scaffold = async () => {
	let nextStep = true;

	if (files.directoryExists('.git')) {
		console.log(chalk.red('El repositorio ya se encuentra inicializado con Git'));
		
		let answer = await inquirer.prompt({
			name: 'actualizarGitIgnore',
			type: 'input',
			message: `¿Deseas actualizar el archivo ${chalk.cyan('.gitignore')} del repositorio?`,
			choices: ['Si', 'No'],
			default: 'Si'
		})

		if(answer.actualizarGitIgnore.toLowerCase() == 'no') {
			console.log(chalk.red('No proyecto no pudo ser generado'))
			nextStep = false;
		}
	}

	if(!nextStep) {
		return;
	}

	const questions = [
		{
			name: 'nombreProyecto',
			type: 'input',
			message: 'Nombre del proyecto:',
		},
		{
			name: 'directorio',
			type: 'input',
			message: 'Directorio:',
			default: files.getCurrentDirectoryBase()
		},
	];

	let answer = await inquirer.prompt(questions)

	if(answer.directorio == files.getCurrentDirectoryBase()) {
		answer.directorio = ".";
	}
	fileCreation.run(answer.nombreProyecto, answer.directorio);

}

module.exports = {
	runScaffoldGeneration: scaffold
}