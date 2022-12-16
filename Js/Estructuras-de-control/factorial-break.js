let contador = 1;
let resultado = 1;

while(true) {
    resultado *= contador;
    contador++;

    if(contador>10){
        break;
    }
}

console.log(resultado);