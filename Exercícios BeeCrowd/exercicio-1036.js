var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha1 = lines[0].split(" ");

var A = parseFloat(linha1[0]);
var B = parseFloat(linha1[1]);
var C = parseFloat(linha1[2]);

var delta =  (B * B) - 4 * A * C;

var bhaskara1 = (-B + Math.sqrt(delta)) / (2 * A);
var bhaskara2 = (-B - Math.sqrt(delta)) / (2 * A);

if (delta <= 0 || A <= 0 || B <= 0 || C <= 0) {
    console.log("Impossivel calcular")
} else {
    console.log(`R1 = ${bhaskara1.toFixed(5)}`);
    console.log(`R2 = ${bhaskara2.toFixed(5)}`);
}
