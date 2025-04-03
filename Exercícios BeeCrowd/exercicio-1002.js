var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var n = 3.14159;


console.log(`A=${parseFloat(n*(input*input)).toFixed(4)}`);