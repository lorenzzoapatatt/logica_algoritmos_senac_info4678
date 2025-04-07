var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var diasPessoa = parseInt(lines[0]);

var anosPessoa = parseInt(diasPessoa/360);
var anosMeses = parseInt(diasPessoa/30);
var anosDias = diasPessoa;


console.log(`${anosPessoa} ano(s) \n ${anosMeses} mes(es) \n ${anosDias} dia(s)`);