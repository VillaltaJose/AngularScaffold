const status = require('./lib/spinner');
const chalk = require('chalk');
const { exec } = require('./lib/exec')

const angularCli = (dir, nombre) => {
    status.start(`Generando proyecto con ${chalk.bold('Angular 11')} y ${chalk.bold('NgZorro')}`)
    exec
}

module.exports = {
    angularCli
}