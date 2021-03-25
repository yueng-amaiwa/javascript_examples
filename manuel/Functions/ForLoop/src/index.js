//var numero = prompt("Write a number");
//while(numero % 3 = 0)
//{
//console.log("El numero es divisible entre 3");
//without i++ Infinite Loop
//i++;
//}

//const n = "id";
//function factorial (form) {
//	let n = form.ingresanumero.value;
//	var total = 1; 
//	for (i=1; i<=n; i++) {
//		total = total * i; 
//	}
//	alert(total);
//	console.log(total);
	//return total; 
//}

//var words = str.split(" ");

//function descifraNumero(form){
//  let o = form.ingresadescifrar.value;
//  console.log(o);
//  var words = o.split("");
//  console.log(words);
//  alert(words);
//  for (var i = 0; i < o.length; i++) {
     //console.log(i);
     //if(){ 
     //console.log(words);
     //alert(words);
     //}
  //words[i] += " ";
 // }
//}

//string.match(regExp);

//lista = new Array('Juan', 'Yueng', 'Manuel');
//console.log(lista);
//function adivinarNombre(form) {
  // Cargamos el combo
  //let m = form.ingresalista.value;
 // console.log(n);
 // for  (let x=0;x < lista.length;x++){
  //    console.log(lista[x]);
    //  if (n === lista[x]){
     /* console.log(m);
      alert(m);
      }  
}
}

//y = 0;
   
  // for (x=0;x < lista.length;x++) {
    // if (expr.test(lista[x])) {
      //document.formulario.miCombo[y] = new Option(lista[x]);
       //y++;
     //}
   //}

//for(initialization;condition;final expression) 

//for(let j = 0; j < 10; j++)
//{
//console.log(j);
//}

//Infinite Loop
//let k = 0,
//for( ;; )
//{
//console.log(j);
//}*/


//console.log("");

//numero argumentos de la funcion
//DECLARATION

//let numero = i
//Function declaration
//Que es declarar una variable? Asignar un valor numericos, string, booleano, Null, Undefined
//Declarar una variable es decirle al PC guardame en memoria la localizacion de una variable. Reservar un espacio en memoria,
//Asignar es darle un valor
//Declaracion de una funcion
/*let x = 5;
function square(numero){
console.log("Dentro de la funcion let x es:",x);
let x = 6;
console.log("Dentro de la funcion x es:",x);
x = 9;
return  numero * numero;
}
console.log("Fuera de la funcion x es:",x);
//console.log(z);
console.log(square(3));
console.log("Despues del square de la funcion x es:",x);
//console.log(numero);
//const resultado = square();
//console.log(resultado);*/

//A function declaration
function square(numero){
return numero * numero;
}
const result = square (5);

// function expression
const nombre = function(argumento1, argumento2){
//console.log('Hello World');
return argumento1 + argumento2; 
}

//Arrow
const texto = (argumento3, argumento4) => {
//statements
return argumento3 * argumento4;
}

function saluda(nombre1) {
console.log(`Hola , ${nombre1}!!!`);
}

function sumar(x,y) {
return "ES UNA SUMA";
return x + y;
}

const adicion = sumar (3,5);
console.log(adicion);





