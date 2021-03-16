var archivo = "vito.jpg"; 
if (file_exists(archivo))
{
console.log("El Archivo Existe");
}else
{
console.log("El archivo NO Existe");
}

var tamano = filesize(archivo);
document.write("<h2>El fichero " + archivo + " ocupa " + (tamano/1024) + " Kb</h2>");
