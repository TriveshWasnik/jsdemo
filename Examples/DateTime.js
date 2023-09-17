let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23, 5,40,12);
console.log(myCreatedDate.toLocaleString());

let date1 = new Date("01-14-2023");
console.log(date1.toLocaleString());
console.log(date1.getTime());
console.log(date1.getMonth());
console.log(date1.getDay());

let timeStamp = Date.now();
console.log(timeStamp)

console.log(Math.floor(Date.now()/(1000)));

let date2 = myDate.toLocaleString('default', {
    weekday:"long",
});
console.log(date2);