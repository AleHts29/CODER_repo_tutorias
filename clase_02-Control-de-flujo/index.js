//Ejemplo 1 Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.
// let numero = parseInt(prompt("Ingrese un numero mayor a 1000"));
// const numeroRango = 1000;
// if (numero > numeroRango) {
//   alert(`El numero ingresado es Mayor a ${numeroRango}`);
// } else {
//   alert(`El numero ingresado no es Mayor a ${numeroRango}`);
// }

// Ejemplo 2 -  Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.
// let saludoUsuario = prompt("Ingrese un saludo").toLowerCase();
// const saludo = "hola";
// if (saludo === saludoUsuario) {
//   console.log(`El usuario ingresado ${saludoUsuario}`);
// } else {
//   console.log(`El usuario no dijo ${saludo}`);
// }

// Ejemplo 3 - Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.
let numeroUser = parseInt(prompt("Ingrese un numero"));
const numMin = 10;
const numMax = 50;

if (numeroUser >= numMin && numeroUser <= numMax) {
  alert(`El numero ingresado se encuentra entrte 10 y 50`);
} else {
  alert("El numero ingresado esta fuera de rango");
}
