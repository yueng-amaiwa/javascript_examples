function sumar() {
let num1, num2, res;
num1 = parseInt(document.calculadora.valor1.value);
num2 = parseInt(document.calculadora.valor2.value);
res = num1 + num2;
document.calculadora.resultado.value = res;
}

function restar() {
let num1, num2, res;
num1 = parseInt(document.calculadora.valor1.value);
num2 = parseInt(document.calculadora.valor2.value);
res = num1 - num2;
document.calculadora.resultado.value = res;
}

function multiplicar() {
let num1, num2, res;
num1 = parseInt(document.calculadora.valor1.value);
num2 = parseInt(document.calculadora.valor2.value);
res = num1 * num2;
document.calculadora.resultado.value = res;
}

function dividir() {
let num1, num2, res;
num1 = parseInt(document.calculadora.valor1.value);
num2 = parseInt(document.calculadora.valor2.value);
res = num1 / num2;
document.calculadora.resultado.value = res;
}

//------TERMOSTATO-----------------------------------

function EntraData() {
let txt = document.getElementById("tempEntrada");
let temp = parseInt(txt.value);
return temp;
}

function EscriuData(nomZona, text) {
document.getElementById(nomZona).innerHTML = text;
}

function toFahrenheit() {
let temp = EntraData();
temp = ((1.8) * temp + 32);
EscriuData('Zona1', temp + " oF");
FraseRelativa(temp);
}

// por pantalla la temp resultado
function toCelsius() {
let temp = EntraData();
let temp2 = ((temp - 32) / 1.8);
EscriuData('Zona1', temp2 + " oC");
FraseRelativa(temp);
}

function FraseRelativa(temperatura) {
let cadena="-";
if ((temperatura >= 14) && (temperatura < 32)) cadena ="Low Temperature";
if ((temperatura >= 32) && (temperatura < 70)) cadena ="Nice Temperature";
if ((temperatura >= 68) && (temperatura <= 100)) cadena ="High Temperature";
if (cadena=="-") cadena = "Unknown Temperature";
EscriuData('Zona2', cadena);
};

//--------FUNCTION MULTIPLICATION BASED ON ADDITION------------
function multsuma() {
let num1, num2, res, i;
num1 = parseInt(document.multsumadora.valor3.value);
num2 = parseInt(document.multsumadora.valor4.value);
res = num1;
var texto=num1.toString();
if(num2 != 0){
for (i = 1 ; i < num2 ; i++){
res = res + num1;
console.log(num1);
texto = texto +"+" + num1.toString();
}
console.log(texto);
}else {
res = num2;
console.log("No hay nada que sumar por cero");
}
document.multsumadora.resultado1.value = res + " que es " + texto;
}



