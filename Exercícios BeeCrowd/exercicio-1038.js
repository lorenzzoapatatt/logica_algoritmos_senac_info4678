var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha1 = lines[0].split(" ");

var valorA = parseInt(linha1[0]);
var valorB = parseInt(linha1[1]);

if (valorA == 1) {
    console.log(`Total: R$ ${(valorB * 4).toFixed(2)}`);
} else if (valorA == 2) {
    console.log(`Total: R$ ${(valorB * 4.50).toFixed(2)}`);
} else if (valorA == 3) {
    console.log(`Total: R$ ${(valorB * 5).toFixed(2)}`);
} else if (valorA == 4) {
    console.log(`Total: R$ ${(valorB * 2).toFixed(2)}`);
} else if (valorA == 5) {
    console.log(`Total: R$ ${(valorB * 1.50).toFixed(2)}`);
}