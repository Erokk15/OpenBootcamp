const miNombre = "Erick Arrivillaga";
const miEdad = 21;
const eresDesarrolador = true;
const nacimiento = new Date(2001, 3, 19);
const libroFavorito = {
    titulo: "Veinte mil leguas de viaje submarino",
    autor: "Julio Verne",
    fecha: new Date(1869, 2, 20),
    url: "https://es.wikipedia.org/wiki/Veinte_mil_leguas_de_viaje_submarino"
};

console.log("Nombre: "+miNombre);
console.log("Edad: "+miEdad+" años");
console.log("¿Eres desarrollador?: "+eresDesarrolador);
console.log("Fecha de nacimiento: "+nacimiento);
console.log("Libro Favorito: "+libroFavorito.titulo);