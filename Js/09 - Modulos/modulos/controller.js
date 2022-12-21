export function suma (a, b) {
    if ((typeof a === 'number') && (typeof b === 'number')) {
        return a + b;
    }
    throw new Error ("Los valores ingresados no son numeros");
}

export function multiplica (a, b) {
    if ((typeof a === 'number') && (typeof b === 'number')) {
        return a * b;
    }
    throw new Error ("Los valores ingresados no son numeros");
}