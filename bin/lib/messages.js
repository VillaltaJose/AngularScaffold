const chalk = require('chalk');

module.exports = {
    okMessage: (message) => console.log(`${chalk.green('✔️')} ${chalk.white(message)}`),
    errMessage: (message, err) => {
        console.log(`${chalk.red('✗')} ${chalk.white(message)}`)
        if(!err) {
            err = message
        }
        console.log(chalk.red(err))
    },
};