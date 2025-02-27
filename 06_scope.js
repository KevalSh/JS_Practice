let a = 300;

if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
    console.log ("inner", a);
}


console.log(a);
//console.log(b);
console.log(c);


// variable defined with var keyword inside of a defined scope is allowing the value to leak out of the scope.
// by logging the value inside of the scope will allow us to understand how value is maintained inside of a block

//Closure concept

if(true) {
    const username = "mavrick";
    if( username === "mavrick"){
        const website = " youtube";
        console.log(username + website)
    }
    
    //console.log(website);
}
//console.log(username);


// Above example makes us understand regarding the concept of closure.

function addOne (num) {
    return num + 1;
}

console.log (addOne(5));

// addition(6);

const addition = function addTwo (num) {
    return num + 2;
}

// when function is stored inside of an variable, the calling of the function can not be done before the declaration of the function.

const addThree = (num1, num2, num3) => {
    return num1+num2+num3;
}

console.log("this is the addition of 3 numbers", addThree(1,2,3));

// implicit function

( (name) => {
    // unnamed IIFE
    console.log(`this is an implicit function created by ${name}`)
}) (99);

(function coffee() {
    console.log(`this is a named IIFE`)
    // named IIFE
}) ();

let numArray = [100, 200, 300, 400 , 500 , 600]

for (let i = 0; i < 3; i++) {
    const element = numArray[i];
    console.log(element);
    console.log(typeof element);
}

// let score = 0;

// do {
//     console.log (`The score is ${score}`);
//     score++;
// } while (score <= 10);

function user (username, isLoggedin) {
    this.username = username;  // this.username will define variable or memory location
    this.isLoggedin = isLoggedin;  // right hand side will be the argument

    return this;  // returning this keyword will allow access to the value.
} // not writing return here, will also work as it is implicitly defined.

let userOne = new user("Mavrick", true);  // writing new keyword is important here as it will create new instance
let userTwo = new user("Tony", false); // creating instance will create new copy therefore the value of original object literal will not change
let userThree = new user("Renish", true);
console.log(userTwo);


function multipleBy5 (num) {
    return num * 5;
}

multipleBy5.power = 2;  // function working as an object as well.

console.log(multipleBy5(5));
console.log(multipleBy5.power);
//console.log(multipleBy5.power(5));  // this will give error
console.log(multipleBy5.prototype);
