var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha1 = lines[0].split(" ");

var A = parseInt(linha1[0]);
var B = parseInt(linha1[1]);
var C = parseInt(linha1[2]);

var formula = (A + B + Math.abs(A - B))/2;

formulafinal = (formula + C + Math.abs(formula - C))/2

console.log(`${formulafinal} eh o maior`);