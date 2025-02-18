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

