const status = require('./lib/spinner');
const fs = require('fs');
const chalk = require('chalk');
const { exec } = require('./lib/exec')
const files = require('./files/files');
const fileHelper = require('./lib/files')
const { okMessage } = require('./lib/messages');
const { createFolders } = require('./lib/files');

const crearDirectorios = async (dir, nombre) => {
    const folders = [
        'layout',
        'pages',
        'shared',
        'shared/components',
        'shared/modules',
        'shared/services',
        'shared/styles',
    ];

    createFolders(`${dir}/${nombre}/src/app`, folders, status,
        `Directorio ${chalk.magenta('src/app/')}${chalk.yellow('FOLDER_NAME')} generado`)

    try {
        status.start('Agregando librería de estilos VSCSS')
        await fileHelper.copy('bin/assets/VScss', `${dir}/${nombre}/src/app/shared/styles/VScss`)
        status.stopOkMessage(`Librería ${chalk.yellow('VScss')} agregada`)

        status.start('Agregando archivos de estilos...')
        fs.writeFileSync(`${dir}/${nombre}/src/app/shared/styles/custom.scss`, '/* Insert your custom global CSS*/')
        fs.writeFileSync(`${dir}/${nombre}/src/styles.scss`, files.styles.styles)
        fs.writeFileSync(`${dir}/${nombre}/src/theme.less`, files.styles.theme)
        status.stopOkMessage(`Estilos agregados`)
        
        status.start('Agregando módulo común NgZorro...')
        await fileHelper.copy('bin/assets/ng-zorro-common', `${dir}/${nombre}/src/app/shared/modules/ng-zorro-common`)
        status.stopOkMessage(`Módulo ${chalk.yellow('NgZorroCommonModule')} agregado`)
        
        status.start('Agregando servicio de Drawers...')
        await fileHelper.copy('bin/assets/drawer', `${dir}/${nombre}/src/app/shared/services/drawer`)
        status.stopOkMessage(`Servicio ${chalk.yellow('DrawerService')} agregado`)
        
        status.start('Agregando app module...')
        fs.writeFileSync(`${dir}/${nombre}/src/app/app.module.ts`, files.app.appmodule)
        status.stopOkMessage(`Archivo ${chalk.yellow('app.module.ts')} agregado`)
        status.start('Agregando app html...')
        fs.writeFileSync(`${dir}/${nombre}/src/app/app.component.html`, files.app.html)
        status.stopOkMessage(`Archivo ${chalk.yellow('app.component.html')} agregado`)
        status.start('Agregando app routing...')
        fs.writeFileSync(`${dir}/${nombre}/src/app/app-routing.module.ts`, files.app.route)
        status.stopOkMessage(`Archivo ${chalk.yellow('app-routing.module.ts')} agregado`)

        console.log('')
        okMessage(chalk.green(`Proyecto ${nombre} generado correctamente`))

    } catch(error) {
        status.stopErrMessage(error)
    }
}

module.exports = crearDirectorios;