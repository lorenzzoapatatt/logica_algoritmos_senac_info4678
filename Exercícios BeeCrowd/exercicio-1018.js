var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines[0]);
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