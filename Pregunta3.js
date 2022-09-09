/*Diseña un código en el cual se pueda ingresar una cadena de texto y regrese cuantas
veces se repite un carácter dado en dicha cadena de texto.
Ejemplo la cadena dada es “hola como estas” y el carácter dado para saber cuantas veces
se repite es “o” entonces la consola debería de mostrar: el carácter “o” se repite 3 veces en
“hola como estas”.*/

var cadena = "hola como estas"

var indices = [];
for (var i = 0; i < cadena.length; i++) {
    if (cadena[i].toLowerCase() === "o") indices.push(i);

}
console.log("El carácter “o” se repite " + indices.length + "veces en" + cadena); 