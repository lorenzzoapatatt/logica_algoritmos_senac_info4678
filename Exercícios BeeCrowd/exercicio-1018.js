var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var valor = parseInt(lines[0]);
<<<<<<< HEAD
var valorCem = Math.floor(valor / 100);
var restoDeCem = valor % 100;
var restoDeCinquenta = restoDeCem % 50;
var restoDeVinte = restoDeCinquenta % 20;
var restoDeDez = restoDeVinte % 10;
var restoDeCinco = restoDeDez % 5;
var restoDeUm = restoDeCinco % 1 ;


console.log(`${valor}`);
console.log(`${valorCem} nota(s) de R$ 100,00`);
console.log(`${restoDeCinquenta} nota(s) de R$ 50,00`);
console.log(`${restoDeVinte} nota(s) de R$ 20,00`);
console.log(`${restoDeDez} nota(s) de R$ 10,00`);
console.log(`${restoDeCinco} nota(s) de R$ 5,00`);
console.log(`${restoDeUm} nota(s) de R$ 1,00`);
=======

var valorCem = Math.floor(valor / 100);
var restoDeCem = valor % 100;
var valorCinquenta = Math.floor(restoDeCem / 50);
var restoDeCinquenta = restoDeCem % 50;
var valorVinte = Math.floor(restoDeCinquenta / 20);
var restoDeVinte = restoDeCinquenta % 20;
var valorDez = Math.floor(restoDeVinte / 10);
var restoDeDez = restoDeVinte % 10;
var valorCinco = Math.floor(restoDeDez / 5);
var restoDeCinco = restoDeDez % 5;
var valorDois = Math.floor(restoDeCinco / 2);
var restoDeDois = restoDeCinco % 2;
var valorUm = Math.floor(restoDeDois / 1);
var restoDeUm = restoDeDois % 1;

console.log(`${valor}`);
console.log(`${valorCem} nota(s) de R$ 100,00`);
console.log(`${valorCinquenta} nota(s) de R$ 50,00`);
console.log(`${valorVinte} nota(s) de R$ 20,00`);
console.log(`${valorDez} nota(s) de R$ 10,00`);
console.log(`${valorCinco} nota(s) de R$ 5,00`);
console.log(`${valorDois} nota(s) de R$ 2,00`);
console.log(`${valorUm} nota(s) de R$ 1,00`);
>>>>>>> 6555ad40edd1a7b7aa8b33cfde48d3fb014a0fe3
