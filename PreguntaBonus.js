/*Dise�ar un c�digo que logre convertir caracteres a may�sculas hasta encontrar un punto, solo
los caracteres previos al Primer punto el resto se quedan en min�sculas, muestra en consola el
antes y el despu�s.
Ejemplo: entrada: www.techacademy.com
salida: WWW.techacademy.com*/


let str = "www.techacademy.com";
console.log (str);
let separator = ".";
let upperPart = str.substring(0, str.indexOf(separator)).toUpperCase();
let lowerPart = str.substring(str.indexOf(separator) + 1);
console.log(`${upperPart}${separator}${lowerPart}`);
