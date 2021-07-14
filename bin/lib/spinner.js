const CLI = require('clui');
const Spinner = CLI.Spinner;

const status = new Spinner('Cargando...');

const start = (message) => {
    status.message(message)
    status.start()
}

const stop = () => status.stop()

module.exports = {
    status,
    start,
    stop
};