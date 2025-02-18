function firstFunction () {
    console.log('this is the first function');
}

firstFunction()

// function for addition of two number

function addTwoNumber (number1, number2) {
    console.log(number1 + number2);
}

addTwoNumber("3","4");

// number1 and number 2 are two variables. There datatypes will be decided on the run time. 
// For the given funciton - if numbers will be passed, it will produce addition , 
// if strings will be passed, then it will concate.

function loginUserMessage (username) {
    let message = `${username} just logged in `
    console.log(message);
    return message;
}

let message = loginUserMessage ("Viraj")
console.log (message)

// let is block scope variable, therefore message variable will not work outside its scope
