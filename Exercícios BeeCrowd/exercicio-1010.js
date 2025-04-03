var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha1 = lines[0].split(" ");
// linha1[0] = 12; foda-se
// linha1[1] = 1;
// linha1[2] = 5.30;

var linha2 = lines[1].split(" ");
// linha2[0] = 16; foda-se
// linha2[1] = 2;
// linha2[2] = 5.10;

var resultadomult1 = (linha1[1] * linha1[2]);
var resultadomult2 = (linha2[1] * linha2[2]);
var resultadofinal = resultadomult1 + resultadomult2;

console.log(`VALOR A PAGAR: R$ ${resultadofinal.toFixed(2)}`);

// 12 1* 5.30
// 16 2* 5.10 = 5.30 + 10.20 = 15.50