function readFile(input) {
	  let file = input.files[0];

	  let reader = new FileReader();

	  reader.readAsText(file);

	  reader.onload = function() {
		  var result = reader.result;
		  console.log(result.length);
		  if (result.length === 12){
			  alert(`1. File size: ${file.size}`);
		  }
		  else{
			  alert(`2. File size: ${file.size}`);
		  }

	};

	  reader.onerror = function() {
			  console.log(reader.error);
			};

}

//var file = "vito.jpg";
//var reader + new FileReader();
//var result = reader.readAsText(file);
//console.log(result);



//var archivo = "vito.jpg"; 
//if (file_exists(archivo))
//{
//console.log("El Archivo Existe");
//}else
//{
//console.log("El archivo NO Existe");
//}

//var tamano = filesize(archivo);
