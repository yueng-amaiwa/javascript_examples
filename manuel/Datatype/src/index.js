

console.log('AMAIWA TU PAPA');
console.log('www.amaiwa.com');

//Data Types
//String
//We can use "let" "const" "var" to declare Data
const exampleString = 'Hello World!!! String';
console.log(exampleString);
//Una comilla
const singleQuotes = 'Hello Single';
console.log(singleQuotes);
//Dos comillas
const doubleQuotes = "Hello Double";
console.log(doubleQuotes);
//Comilla simple al contrario permite anadir datos de fuentes diversas
//Extended functionalities, it let add many variables
const name = 'Juan Yueng Manuel';
const backticks = `Hello Backticks, ${name}, Somos Amaiwa!`;
console.log(name);
console.log(backticks);

//SOLO TEXTO
const backticks2 = `2 + 2`;
console.log(backticks2);
//Decribe type of DataType
console.log(typeof backticks2);

//OPERACIONES MATEMATICAS
const backticks3 = `${2 + 2}`;
console.log(backticks3);
console.log(typeof backticks3);

//DATA TYPE NUMBERS
const wholeNumber = 5;
const decimalNumber = 0.55;

console.log(wholeNumber);
console.log(decimalNumber);

//Operaciones
const result = wholeNumber - decimalNumber;
console.log(result);

const result1 = wholeNumber * decimalNumber;
console.log(result1);
console.log(typeof result1);
//NaN Not a Number
const result2 = singleQuotes / wholeNumber;
console.log(result2);
console.log(typeof result2);

//Manuel Discovery whilw using "+" it add string to number as backticks
const result3 = singleQuotes + wholeNumber +" "+ (10/3);
console.log("Result 3", result3);
console.log(typeof result3);

//DATA TYPE BOOLEANS
// TRUE or FALSE it can only be
// true - yes, correct, 1 (One)
// false - no, incorrect, 0 (Zero)
const isCool = true;
console.log(isCool);
console.log(typeof isCool);

//Permit to use conditional IF
if(isCool)
{
console.log("Hi man you are cool");
console.log(typeof isCool);
}else
{
console.log("Oh, hi you are not cool");
console.log(typeof isCool);
}

//Comparison is use for Boolean
const age = 21;
console.log(age > 20);
console.log(typeof age);

//DATA TYPE null
//To set initial value for data
const age1 = null;
console.log(age1);
console.log(typeof age1);


//DATA TYPE undefined
//Data that has not being defined nor asigned a value

let x;
console.log(x);
console.log(typeof x);

//DIFFERENCES BETWEEN null VS undefined
//null has been asigned a value of "notvalue" "object - bug of Java"
//undefined has not being any type of value


//LOGIC & CONTROL FDlow
//else without parenthesis means other option not consider before

const age2 = 18;
if (age2 > 18)
{
console.log("You may enter");
} else if (age2 === 18)
{
console.log("You just turn 18 WELCOME")
} else
{
console.log("GROW UP DUDE!")
}


//FOR or WHILE LOOP
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);


let i = 0;
while(i < 10)
{
console.log(i);
//without i++ Infinite Loop
i++;
}


//for(initialization;condition;final expression) 

for(let j = 0; j < 10; j++)
{
console.log(j);
}

//Infinite Loop
//let k = 0,
//for( ;; )
//{
//console.log(j);
//}

//Logical Operator
//AND && ==> all operands are true ==> true
 console.log(true && false);


