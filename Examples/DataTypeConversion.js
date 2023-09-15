/* 
    "33" => 33
    "22abc" => NaN
    true => 1; false => 0 
    "" => false
    "school" => true
*/

let stringNumber = "22"
let numNumber = Number(stringNumber); 
console.log(typeof numNumber);

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let score = 33;
let convertString = String(score);
console.log(typeof convertString);
