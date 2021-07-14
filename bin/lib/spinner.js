const CLI = require('clui');
const Spinner = CLI.Spinner;
const { okMessage, errMessage } = require('./messages')

const status = new Spinner('Cargando...');

const start = (message) => {
    status.message(message)
    status.start()
}

const stop = () => status.stop()

const stopOkMessage = (message) => {
    okMessage(message);
    stop()
}

const stopErrMessage = (message) => {
    errMessage(message);
    stop()
}

module.exports = {
    status,
    start,
    stop,
    stopOkMessage,
    stopErrMessage
};