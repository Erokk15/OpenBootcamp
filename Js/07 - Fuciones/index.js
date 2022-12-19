// Una función sin parámetros que devuelva siempre "true"
function siempreVerdadero() {
    return true;
}
console.log(siempreVerdadero());

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(siempreVerdadero() === true) {
            resolve("Hola soy una promesa");
        } else {
            reject("ERROR");
    }
    }, 5000)
});

miPromesa
    .then((valor) => {
        console.log(valor);
    })
    .catch((err) => {
        console.log(err);
    });

// Una función generadora de índices pares automáticos

function* generarId() {
    let id = 0;
    while(true) {
        id += 2;
        yield id;
    }
}

const gen = generarId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

