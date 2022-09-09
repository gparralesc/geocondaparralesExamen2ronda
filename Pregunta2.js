/*Escribir el código que muestre en consola los múltiplos de un número entero
dado(definido en una variable para ser manipulado) en una secuencia del 1 al 100.
Ejemplo si el número dado es 3 sus múltiplos serían 3,6,9,12,15.....21, etc.*/


function multiplo(valor, multiplo) {
    resto = valor % multiplo;
    if (resto == 0)
        return true;
    else
        return false;
}

let multiplos3 = [];
let i;

for (i = 1; i <= 100; i++){

    if (multiplo(i,3))

        multiplos3.push(i);
}
console.log("Multiplos de 3: ", multiplos3);