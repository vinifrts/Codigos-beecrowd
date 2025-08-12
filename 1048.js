var input = require('fs').readFileSync('stdin', 'utf8');
let salario = parseFloat(input) 
let ganho = 0
let percentual = 0
let novoSalario = 0

if(salario <= 400){

ganho = salario * 0.15

novoSalario = salario + ganho

percentual = 15
}

else if(salario >= 400.01 && salario <= 800.00){

ganho = salario * 0.12

novoSalario = salario + ganho

percentual = 12
}

else if(salario >= 800.01 && salario <= 1200.00){

ganho = salario * 0.1

novoSalario = salario + ganho

percentual = 10
}

else if(salario >= 1200.01 && salario <= 2000){

ganho = salario * 0.07

novoSalario = salario + ganho

percentual = 7
}

else if(salario > 2000){

ganho = salario * 0.04

novoSalario = salario + ganho

percentual = 4
}

console.log("Novo salario: " + novoSalario.toFixed(2))

console.log("Reajuste ganho: " + ganho.toFixed(2))

console.log("Em percentual: " + percentual + " %")
