// Crear una funcion Template para criear objetos Pie.
// Los objetos de la clase pie deben tener los siguientes requerimientos:
// 1. Numero de dedos (Numero aleatorio entre 3 y 5)
//2. Talla de Zapatos (Numero aleatorio entre 35 y 44)
//3. El genero si es femenino o masculino
//4. Un metodo para patear una bola. Necesita una funcion template para crear una bola
//5. Un metodo para encapsular la talla de los zapatos


function Pie() {
    //numeroDeDedos: NumerosAleatorios(3,5),
    this.numeroDeDedos = NumerosAleatorios(3,5);
    let colorDeUnas = "Color Piel";
    //this.ColordeUnas = "Color Piel";
   let tallaDeZapatos = NumerosAleatorios(35,44);
    this.getTallaDeZapatos = function () {
    return tallaDeZapatos;
    };

    this.PatearBalon =  function (ball) {
        if (ball.type == "Futbol" ){
        ball.type = "Microfutbol";
        } else {
        ball.type = "Futbol";
        };
    };
    if (Math.random() < 0.5) {
    this.Genero = "female";
   } else {
      this.Genero = "male";
     };
    
    let elCrack = function (persona){};
    this.jugadaEspecial = function (ball,persona){
        if (ball.altura == "Media Golea"){
            persona.skill = "Crack del Media Golea";
            }   else if (ball.altura == "Palomita") {
                    persona.skill = "Crack de la Palomita";
                } else if (ball.altura == "Chilenita") {
                    persona.skill = "Crack de la Chilenita";
                };
    };
        
    let i = Math.random();
    if (i < 0.3) {
    this.colordepiel = "negro";
    } else if (i < 0.7 || i == 0.3) {
      this.colordepiel = "moreno";
      } else {
            this.colordepiel = "blanco";
      };
};

let PieManuel = new Pie();

function CreateBall(){
if (Math.random() < 0.5) {
    this.type = "Futbol";
    //console.log("Balon de Futbol");
     } else {
        this.type = `Microfutbol`;
         //console.log("Balon de Microfutbol");
     };

if (Math.random() < 0,5){
    this.altura = "Media Golea";
        } else if (Math.random() < 0,8 || Math.random() > 0,5){
        this.altura = "Palomita";
            } else {
            this.altura = "Chilenita";
    };
};


function NumerosAleatorios(min, max) {
   return Math.round(Math.random() * (max - min) + min);
};


function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.skill = "Normal";
  this.NombreCompleto = function (){
  Nombres(first,last);
  };
}



Person.prototype.nationality = "English";

function Nombres (Primer,Segundo){
console.log(Primer," ",Segundo)
this.Persona = function (){
Person(Primer,Segundo);
};
};



