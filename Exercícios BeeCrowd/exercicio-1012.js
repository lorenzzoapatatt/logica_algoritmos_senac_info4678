var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var pi = 3.14159;
var linha1 = lines[0].split(" ");

var triangulo = (linha1[0] * linha1[2])/2;
var circulo = pi * (Math.pow(linha1[1], 2));
var trapezio = ((linha1[0] + linha1[1]) * linha1[2])/2;
var quadrado = Math.pow(linha1[1] , 2);
var retangulo = linha1[0] * linha1[1];

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);