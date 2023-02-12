
//const { type } = require('os');
//const { argv, argv } = require('process');
//const { demandOption, options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, ' creado') )
    .catch( err => console.log(err));
