var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines[0]);
var pi = 3.14159;
var raiona3 = Math.pow(raio, 3);

console.log(`VOLUME = ${((4/3.0) * pi * raiona3).toFixed(3)}`);