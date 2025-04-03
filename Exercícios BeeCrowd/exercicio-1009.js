var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = lines[0]; //nome
var b = parseFloat(lines[1]); //salário fixo
var c = parseFloat(lines[2]); //total de vendas efetuadas por ele no mês
var comissao = c * 0.15;

console.log(`TOTAL = R$ ${(b + comissao).toFixed(2)}`)