//function arbolito(edad) {
//this.edadarbolito = edad;


//return {
let arbol = {
    edadarbol: 20,
    promediohojas: 100,
    tasamortalidad: 50,
    max: 10,
    min: -10,
    rNumber: Math.random() * (10 - -10) + -10,
    season: 'SP',
    getLeaveCount: function() {
    return (this.edadarbol * this.promediohojas) + this.rNumber;
    },
    healthstatus: function(season) {
        if (season === 'SP') {
        return "La salud del arbol es Buena";
        } else if (season === 'SU') { 
            return "La salud del arbol es Excelente"; 
        } 
        else if (season === 'FA') { 
            return "La salud del arbol es Mas o Menos";
        } 
        else if (season === 'WI') {
               return "La salud del arbol es Mala";
           }
    },
    randomNumber: function() {
    return Math.random() * (this.max - this[`min`]) + this.min;
    }
    };
//}
