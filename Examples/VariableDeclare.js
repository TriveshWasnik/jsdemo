"use strict" // treat all JS code as Newer Version of JS
const accountId = 144553;
let accountEmail = "trivesh@google.com";
let accountPassword = "12345";
let accountCity = "Nagpur";
let accountState;

console.log(typeof accountId);
console.log(typeof undefined);
console.log(typeof null);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Note : 
1. Prefer not to use 'var' because of issue in block scope and functional scope
2. Code Readability should be high
3. Data Types :
    number
    bigint
    string
    boolean
    null => standalone value
    undefined => value not assign in variable
    symbol => unique
    object  
*/