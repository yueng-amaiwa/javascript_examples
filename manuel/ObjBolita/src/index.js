function Hand(player,ball) { //Variables y Argumentos se le ponen a la funcion (Yueng)
    let vectorinitial = 0; //todo dentro de la funcion son variables
    let directionx = Math.random();
    let directiony = Math.random();
    this.idPlayer = player; //this. es un atributo
    this.theball = ball; // es un metodo
//  this.theball.printHello(); //Es un metodo  / The same as bellow
//    ball.printHello();
//    ball[`printHello`]();
    this.getDirx = function() {
        return directionx;
    };
    this.getDiry = function() {
        return directiony;
    };
    this.getVectInit = function() {
        return vectorinitial;
    };

};

function Bolita() {
    this.printHello = function() {
    console.log("Hello Ball");
    }

};

//let ball = new Bolita();
let ball = 3;
let hand1 = new Hand("Emma",ball);


function OtraCosa(a,b) {
console.log(a,b);
};
OtraCosa(2,3);
