let nombre = "Erick";
let apellido = "Arrivillaga";
let estudiante = `${nombre} ${apellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let letras = estudiante.length;
let primeraLetra = nombre.charAt(0);
let ultimaLetra = apellido.charAt(apellido.length - 1);

//Eliminar TODOS los espacios
let sinEspacios = estudiante.replace(" ", "");

//Eliminar espacios a los extremos
let sinEspaciosExtremos = estudiante.trim();

let incluye = estudiante.includes(nombre);

console.log(sinEspacios);