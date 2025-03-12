import { somar } from "./soma.js";
import { dividir } from "./divisao.js";
import { subtrair } from "./subtracao.js";
import { multiplicar } from "./multiplicacao.js";
import { inverter } from "./inverte_array.js";
import { pares } from "./par.js";

//Calculadora
console.log("\n1-Soma \n2-Subtração \n3-Multiplicação \n4-Divisão")
let opcao = 1;
let x= 8;
let y=2;

switch(opcao){
    case 1:
        console.log("\nResultado da soma: " +somar(x,y));
    break;
    case 2:
        console.log("\nResultado da subtração: " +subtrair(x,y));
    break;
    case 3:
        console.log("\nResultado da multiplicação: " +multiplicar(x,y));
    break;
    case 4:
        console.log("\nResultado da divisão: " +dividir(x,y));
    break;
    default:
        console.log("Opção inexistente.");
    break;
}

// Inverter Array
let array1 = [1,2,3,4,5];
let inversao = inverter(array1)
console.log("\nIvertendo arrays")
console.log("Array: " + array1);
console.log("Inversão: " + inversao);

//Números pares
let array2 = [1,2,3,4,5,6,7,8,9,10];
console.log("\nEncontrando números pares de uma array:")
console.log("Array: "+ array2);
console.log("Pares: "+ pares(array2));