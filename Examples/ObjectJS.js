const mySym = Symbol("key1");

const user = {
    name:"Hitesh",
    "full name":"Hitesh Jadhav",
    [mySym] : "mykey1",
    age:18,
    location:"Nagpur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

user.greeting = function() {
    return "Hello JS User";
}

user.greeting2 = function() {
    return `Hello ${this["full name"]}`
}

console.log(user.name);
console.log(user["full name"]);
console.log(user[mySym]);

console.log(user.greeting());
console.log(user.greeting2());

Object.freeze(user);  // can not change any value after freeze
user.location = "Pune";
console.log(user);

