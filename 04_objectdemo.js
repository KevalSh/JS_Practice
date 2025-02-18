const Juser = {
    name : "keval",
    age : 22
} 

console.log(Juser);

Juser.greetings = function() {
    console.log("hello user");
}

Juser.greetingsTwo = function () {
    console.log(`hello user, ${this.name}`)
}

console.log(Juser.greetings());
console.log(Juser.greetingsTwo());


const Jpuser = new Object (); // empty object but it is a singletone object
const Jpsuser = {}; // empty obeject but it is not singaltone

console.log(Jpuser);
console.log(Jpsuser);