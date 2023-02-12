const fs = require('fs');
const colors = require('colors');

const crearArchivo  = async( base = 5, l = false, h = 10) => {

    try {    

        let salida = '';

        for (let index = 1; index <= h ; index++) {
            salida += `   ${ base} ${ 'X'.blue } ${ index } ${ '='.cyan } ${ base * index }\n`;    
        }
        if ( l ) {
            console.log("=======================".bgGreen)
            console.log(`      tabla del : ${ base }    `.bgGreen.bold)
            console.log("=======================".bgGreen) 
            console.log(salida)
        }

        fs.writeFileSync(`./salida/tabla del ${ base }.txt`, salida)

        return(`Tabla del ${ base }.txt`);
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}