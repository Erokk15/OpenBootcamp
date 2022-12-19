// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const misDatosPersonales = {
    nombre : "Erick",
    apellido: "Arrivillaga",
    edad: 21,
    altura : 1.70,
    isDeveloper: true
};

// Una variable que obtenga tu edad a partir del objeto anterior
const miEdad = misDatosPersonales.edad;
console.log(miEdad);


// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datosPersonales = [{...misDatosPersonales}, {
    nombre : "Fernando",
    apellido: "Herrera",
    edad: 22,
    altura : 1.67,
    isDeveloper: true
},
{
    nombre : "Otmar",
    apellido: "Orozco",
    edad: 20,
    altura : 1.75,
    isDeveloper: false
}];

console.log(datosPersonales);

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const ordenados = datosPersonales.sort((a, b) => b.edad - a.edad);
console.log(ordenados);