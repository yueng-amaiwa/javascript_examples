//var numero = prompt("Write a number");
//while(numero % 3 = 0)
//{
//console.log("El numero es divisible entre 3");
//without i++ Infinite Loop
//i++;
//}

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

var str = "Amaiwa tu Papa los demas no valen nah!";
var words = str.split(" ");
for (var i = 0; i < words.length - 1; i++) {
    words[i] += " ";
}
console.log(words);

//lista = new Array('Juan', 'Yueng', 'Manuel');

//function adivinarNombre(nombre) {
  // Cargamos el combo
 // for (x=0;x < lista.length;x++)
  // document.formulario.miCombo[x] = new Option(lista[x]);
//console.log(nombre);
//}

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
//}



