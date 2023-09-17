const myArr = [0,1,9,3,4,5]; // array literal
console.log(myArr[2]);  //9
myArr.push(2);  // insert element at the end
myArr.unshift(7); // insert element at the begin
console.log(myArr); //[ 7, 0, 1, 9, 3, 4, 5, 2]

myArr.pop(); // remove element of last
myArr.shift(); // remove element from first
console.log("A : "+ myArr);
console.log(myArr.includes(9)); //true
console.log(myArr.indexOf(4)); //4

const myn1 = myArr.slice(1,4);
console.log("B : "+ myArr);
console.log(myn1);  // [ 1, 9, 3 ]

const myn2 = myArr.splice(1,4);
console.log("C : "+ myArr); // [ 0, 5 ]
console.log(myn2); // [ 1, 9, 3, 4 ]  

const newArr = myArr.join(); // Convert Array to String
console.log(newArr); //0, 5 string value

const marval_heros = ["Thor","Ironman","Spiderman"];
const dc_heros = ["Elektra","Batman","Superman"]
//const allheros = marval_heros.concat(dc_heros);
const allheros = [...marval_heros,...dc_heros]; 

const arr2 = [1,2,4,[2,3,4],[5,6,2,[1,2,4]]];
console.log(arr2.flat(Infinity));

console.log(Array.isArray("Trivesh"));  // false
console.log(Array.from("Trivesh")); // [ 'T', 'r', 'i', 'v', 'e', 's', 'h' ]
console.log(Array.of(10,20,30)); //[ 10, 20, 30]

const myHeros = new Array("Shaktiman","Nagraj"); // array Object
console.log(myHeros[1]);
