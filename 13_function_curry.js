let multiply = function (x, y) {
    console.log(x * y);
}
//multiple functions can be created with single function definition. 
let multiplyByTwo = multiply.bind(this, 3 ); // if i will pass both the parameters here
// then the parameter passed below will be ignored.
// first value will be considered for the X and second value will be considered of Y
multiplyByTwo(2,3);

multiplyByTwo(5); // this value will be considered for the Y

// currying can be done through closure also
// mainly used when you have to take multiple arguments so you can take arguments at multiple step

let sum = function (a){
    return function(b) {
        return a + b ;
    }
}

let sumTwoValue = sum (7);
//console.log(sumTwoValue);
console.log(`the sum of two values is ${sumTwoValue(8)}`);
