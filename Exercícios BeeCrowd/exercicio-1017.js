
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

automovel = 12
var tempoGasto = parseInt(lines[0]);
var tempoMedio = parseInt(lines[1]);
var quantidadeParaViagem = (tempoGasto * tempoMedio)/automovel;

console.log(quantidadeParaViagem.toFixed(3)); 
