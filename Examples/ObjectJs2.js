const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "Daren Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const regularUser = {
    email:"darensamy@chatgtp.com",
    fullname : {
        userfullname :{
            firstname:"Hitesh",
            lastname:"Sharma"
        }
    }
}
console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"b"};
const obj3 = {5:"d", 6:"e"};
//const mergeObj = Object.assign({},obj1,obj2,obj3);
const mergeObj = {...obj1,...obj2,...obj3};
console.log(mergeObj);

const users = [
    { id : 1, email:'abc@gmail.com'},
    { id : 2, email:'bec@gmail.com'},
    { id : 3, email:'cbd@gmail.com'},
]
console.log(users[1].email);


