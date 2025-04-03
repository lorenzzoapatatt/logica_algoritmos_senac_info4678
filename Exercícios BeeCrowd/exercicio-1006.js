var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);
var media = ((2 * a) + (3 * b) + (5 * c))/10;

console.log(`MEDIA = ${media.toFixed(1)}`);