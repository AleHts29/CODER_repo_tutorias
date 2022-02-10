// Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. Ejemplo:  ¡Hola, Juan!
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su Apelllido");
let edad = parseInt(prompt("Ingrese su nombre"));

alert(`Hola ${nombre} - ${apellido}, tu edad es: ${edad}`);

// Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
let numero = parseInt(
  prompt("Ingrese un numero, el cual sera sumado a la edad que ingreso")
);
let resultado = edad + numero;
console.log(`El resultado de la suma de "edad + numero" ${resultado}`);
