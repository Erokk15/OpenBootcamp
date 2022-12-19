// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["Arroz", "Frijoles", "Aguacates", "Lentejas", "Tomates", "Cebollas"];

// Modifica la lista de la compra y añádele "Aceite de Girasol"
const añadirCompra = listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
const eliminarCompra = listaCompra.pop();
console.log(listaCompra);

// Una lista de tus 3 peliculas favoritas (Objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [{
    titulo: "Fight Club",
    director: "David Fincher",
    fecha: 1999
},
{
    titulo: "Shutter Island",
    director: "Martin Scorsese",
    fecha: 2010
},
{
    titulo: "Enemy",
    director: "David Villeneuve",
    fecha: 2014
}];

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasPosteriores = peliculasFavoritas.filter(valor => valor.fecha >= 2010);
console.log(peliculasPosteriores);

//  Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculasFavoritas.map(valor => valor.director);
console.log(directores);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculasFavoritas.map(valor => valor.titulo);
console.log(titulos);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const directoresConcat = directores.concat(titulos);
console.log(directoresConcat)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const directoresPropagacion = [...directores, ...titulos];
console.log(directoresPropagacion);

