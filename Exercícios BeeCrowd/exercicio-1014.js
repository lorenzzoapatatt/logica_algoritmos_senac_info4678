var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var X = parseInt(lines[0]); //Km
var Y = parseFloat(lines[1]); //gasolina gastada l

var consumo = X / Y;

console.log(`${consumo.toFixed(3)} km/l`);
