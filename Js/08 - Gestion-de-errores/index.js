const logger = require('./logger');

const mostrarError = () => {
    throw new Error('Esto es un mensaje desde la funcion mostrarError()');
}

try {
    mostrarError();
    console.log("Todo bien, no hay errores");
} catch (e) {
    logger.error(`${e}`);
}