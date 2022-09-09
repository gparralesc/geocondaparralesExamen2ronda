/*Diseñar un código que logre convertir caracteres a mayúsculas hasta encontrar un punto, solo
los caracteres previos al Primer punto el resto se quedan en minúsculas, muestra en consola el
antes y el después.
Ejemplo: entrada: www.techacademy.com
salida: WWW.techacademy.com*/


let str = "www.techacademy.com";
console.log (str);
let separator = ".";
let upperPart = str.substring(0, str.indexOf(separator)).toUpperCase();
let lowerPart = str.substring(str.indexOf(separator) + 1);
console.log(`${upperPart}${separator}${lowerPart}`);
