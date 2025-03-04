var a = "Kisame";

console.log(a); // output - Kisame

var a = "Itachi"; 

console.log(a); // if line no. 3 is commented then output will be Itachi. Value of a wil be overwritten.

//expected output - undefined
//JS is run in two phases, therefore memory has been allocated for variable a with undefined
// var is hoisted and we can access it in the above case

//console.log(b);

const b = "Hidan";

// expected output - error for accessing before intialization
// const is also hoisted. At this point its value will be undefined
// but we can not access it as it is in the temporal dead zone

//console.log(c);

let c = "Kakuzu";

// expected output - error for accessing before intialization
// let is also hoisted. At this point its value will be undefined
// but we can not access it as it is in the temporal dead zone

hi ();

function hi (){
    console.log("Hello from Akatsuki");
}
// hi function was called before it was defined. Yet we receive the output of the function
// Therefore function is being hoisted.

sayHi();

const sayHi = function() {
    console.log("Hello from Zetsu")
}
