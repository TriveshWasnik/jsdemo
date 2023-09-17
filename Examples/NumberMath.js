const score = 400   //Number literal
console.log(score); //400
console.log(score.toFixed(2));  //400.2

const balance = new Number(100) //Number Object
console.log(balance);   //100
console.log(balance.toFixed(2));    //100.00

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); //123.9

const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN')); //10,00,00,000

/* +++++++++++++ Maths +++++++++++++ */

//console.log(Math);

console.log(Math.abs(-10)); //10
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.3)); // 4
console.log(Math.min(4,3,6,8)); //3
console.log(Math.max(4,3,6,8));  //8
console.log(Math.random());

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min); 

