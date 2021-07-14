const status = require('./lib/spinner');
const chalk = require('chalk');
const { exec } = require('./lib/exec')
const inquirer = require('inquirer')
const installPackages = require('./packages')

const angularCli = async (dir, nombre) => {
    const questions = [
        {
			name: 'routing',
			type: 'input',
			message: `¿Deseas agregar ${chalk.yellow('angular routing')}?`,
			choices: ['Si', 'No'],
			default: 'Si'
		},
        {
			name: 'stylesheet',
			type: 'list',
			message: `¿Qué tipo de hoja de estilos deseas utilizar?`,
			choices: ['css', 'scss', 'sass', 'less'],
			default: 'scss'
		},
    ];

    const answers = await inquirer.prompt(questions);
    
    let opts = {
        routing: answers.routing.toLowerCase() == 'si' ? 'true' : 'false',
        stylesheet: answers.stylesheet.toLowerCase() ?? 'scss',
    }

    status.start(`Generando proyecto con ${chalk.bold('Angular 11')} y ${chalk.bold('NgZorro')}`)
    try {
        await exec(`ng new ${nombre} --force --directory=${dir}/${nombre} --routing=${opts.routing} --style=${opts.stylesheet}`)
    } catch {} finally {
        status.stop()
        console.log()
        status.stopOkMessage(`Proyecto base`)
        installPackages(dir, nombre)
    }

}

module.exports = {
    angularCli
}