var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[0]); //numero do funcionario
var b = parseInt(lines[1]); //número de horas trabalhadas
var c = parseFloat(lines[2]); //valor que recebe por hora
var salario = b * c;

console.log(`NUMBER = ${a}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`)