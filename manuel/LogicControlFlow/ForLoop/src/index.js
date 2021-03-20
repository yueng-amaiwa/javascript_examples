//var numero = prompt("Write a number");
//while(numero % 3 = 0)
//{
//console.log("El numero es divisible entre 3");
//without i++ Infinite Loop
//i++;
//}

//const n = "id";
function factorial (form) {
	let n = form.ingresanumero.value;
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	alert(total);
	console.log(total);
	//return total; 
}

//var words = str.split(" ");

function descifraNumero(form){
  let o = form.ingresadescifrar.value;
  console.log(o);
  var words = o.split("");
  console.log(words);
  alert(words);
  for (var i = 0; i < o.length; i++) {
     //console.log(i);
     //if(){ 
     //console.log(words);
     //alert(words);
     //}
  //words[i] += " ";
  }
}

//string.match(regExp);

lista = new Array('Juan', 'Yueng', 'Manuel');
console.log(lista);
function adivinarNombre(form) {
  // Cargamos el combo
  let m = form.ingresalista.value;
  console.log(n);
  for  (let x=0;x < lista.length;x++){
      console.log(lista[x]);
      if (n === lista[x]){
      console.log(m);
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
//}



