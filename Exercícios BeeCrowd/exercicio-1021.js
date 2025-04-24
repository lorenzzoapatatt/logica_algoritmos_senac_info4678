var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseFloat(lines[0]);

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

var umReal = Math.floor(restoDeDois / 1)
var restoDeUm = restoDeDois % 1;
var cinquentaCentavos = Math.floor(restoDeUm / 0.5);
var restoDeCinquentaCentavos = restoDeUm % 0.5;
var vinteCincoCentavos = Math.floor(restoDeCinquentaCentavos / 0.25);
var restoDeVinteCincoCentavos = restoDeCinquentaCentavos % 0.25;
var DezCentavos = Math.floor(restoDeVinteCincoCentavos / 0.10);
var restoDeDezCentavos = restoDeVinteCincoCentavos % 0.10;
var cincoCentavos = Math.floor(restoDeDezCentavos / 0.05);
var restoDeCincoCentavos = restoDeDezCentavos % 0.05;
var umCentavo = Math.floor(restoDeCincoCentavos / 0.01);

console.log(`NOTAS:`);
console.log(`${valorCem} nota(s) de R$ 100.00`);
console.log(`${valorCinquenta} nota(s) de R$ 50.00`);
console.log(`${valorVinte} nota(s) de R$ 20.00`);
console.log(`${valorDez} nota(s) de R$ 10.00`);
console.log(`${valorCinco} nota(s) de R$ 5.00`);
console.log(`${valorDois} nota(s) de R$ 2.00`);
console.log(`MOEDAS:`);
console.log(`${umReal} moeda(s) de R$ 1.00`);
console.log(`${cinquentaCentavos} moeda(s) de R$ 0.50`);
console.log(`${vinteCincoCentavos} moeda(s) de R$ 0.25`);
console.log(`${DezCentavos} moeda(s) de R$ 0.10`);
console.log(`${cincoCentavos} moeda(s) de R$ 0.05`);
console.log(`${umCentavo} moeda(s) de R$ 0.01`);