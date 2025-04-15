var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var diasPessoa = parseInt(lines[0]);

var anosPessoa = Math.trunc(diasPessoa/365);
var anosResto = diasPessoa%365;
var mesesPessoa = Math.trunc(anosResto/30);
var mesesResto = mesesPessoa%30;
var anosDias = Math.trunc(mesesResto);

console.log(`${anosPessoa} ano(s) \n ${anosMeses} mes(es) \n ${anosDias} dia(s)`);

