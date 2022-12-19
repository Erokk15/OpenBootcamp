const familia = ["Amabilia", "Arnulfo", "Wuilder", "Cesar", "Erick"];

// Un nuevo Set con los nombres de tu familia
const miFamilia = new Set(familia);
console.log(miFamilia);

// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miFamilia.add("Erick");
console.log(miFamilia);

// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miFamilia.add("Javascript");
console.log(miFamilia);