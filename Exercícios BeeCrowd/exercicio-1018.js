var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines[0]) //segundos
var calculo = A /60;

console.log()