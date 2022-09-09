/*Generar un código el cual genere 5 números aleatorios(Math.random()*100) enteros y
devuelva si el número generado es par o impar.
Ejemplo:
Primera iteración: numeroGenerado = 5 // el número es impar
Segunda iteración: numeroGenerado = 12 // el número es par*/


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

