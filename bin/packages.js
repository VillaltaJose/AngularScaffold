const status = require('./lib/spinner');
const fs = require('fs');
const chalk = require('chalk');
const { exec } = require('./lib/exec')
const files = require('./files/files')

const installPackages = async (dir, nombre) => {
    fs.writeFileSync(`${dir}/${nombre}/.editorconfig`, files.editorConfig)
}

module.exports = installPackages;