const status = require('./lib/spinner')
const fs = require('fs');
const chalk = require('chalk')
const { exec } = require('./lib/exec')
const files = require('./files/files')
const { okMessage } = require('./lib/messages')
const crearDirectorios = require('./carpetas')

const installPackages = async (dir, nombre) => {
    status.start('Generando archivos y plantillas iniciales...');
    
    try { fs.rmSync(`${dir}/${nombre}/package-lock.json`, { recursive: true }) } catch {}

    fs.writeFileSync(`${dir}/${nombre}/.editorconfig`, files.editorConfig)
    okMessage(`Archivo ${chalk.yellow('.editorconfig')} generado`)
    
    fs.writeFileSync(`${dir}/${nombre}/package.json`, files.package_json(nombre))
    okMessage(`Archivo ${chalk.yellow('package.json')} generado`)
    
    status.stop()
    let projectDir = `${dir}/${nombre}`

    try {
        status.start('Instalando dependencias...')
        await exec(`cd ${projectDir} && npm install --force`)
        status.stopOkMessage('Dependencias instaladas')

        status.start('Escribiendo configuraciones...')
        fs.writeFileSync(`${projectDir}/tsconfig.json`, files.tsconfig_json)
        status.stopOkMessage(`Archivo ${chalk.yellow('tsconfig.json')} generado`)
        
        status.start('Escribiendo configuraciones...')
        fs.writeFileSync(`${projectDir}/angular.json`, files.angular_json(nombre))
        status.stopOkMessage(`Archivo ${chalk.yellow('angular.json')} generado`)
    } catch (error) {
        status.stopErrMessage(error)
    }

    crearDirectorios(dir, nombre)
    
}

module.exports = installPackages;