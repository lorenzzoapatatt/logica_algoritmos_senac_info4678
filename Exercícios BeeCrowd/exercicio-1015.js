var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha1xy = lines[0].split(" ")
var x1 = linha1xy[0];
var y1 = linha1xy[1];

var linha2xy = lines[1].split(" ")
var x2 = linha2xy[0];
var y2 = linha2xy[1];

var distancia = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2));

console.log(distancia.toFixed(4));