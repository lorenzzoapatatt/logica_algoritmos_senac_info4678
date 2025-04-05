var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var carro2 = parseInt(lines[0]);

console.log(`${carro2*2} minutos`);