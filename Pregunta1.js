/*Generar un c�digo el cual genere 5 n�meros aleatorios(Math.random()*100) enteros y
devuelva si el n�mero generado es par o impar.
Ejemplo:
Primera iteraci�n: numeroGenerado = 5 // el n�mero es impar
Segunda iteraci�n: numeroGenerado = 12 // el n�mero es par*/


var indices = ["PRIMERA", "SEGUNDA", "TERCERA", "CUARTA", "QUINTA"];
for (var i = 0; i < indices.length; i++) {
    let num = Math.floor((Math.random() * (100)) + 1)
    if (num % 2 == 0) {
        console.log(indices[i] + " interaccion numero generado es " + num + " el numero es par")
    } else {
        console.log(indices[i] + " interaccion numero generado es " + num + " el numero es impar")
    }
}





}

