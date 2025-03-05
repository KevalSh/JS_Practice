const promise1 = new Promise((resolve, reject) => {
    resolve(console.log("Hello")); 
});
   
    


async function prom1 (){
    return promise1;
}

const dataProm1 = prom1();

console.log(dataProm1);

// what pyramid of doom / Callback hell can look like

// createOrder(cart, function(orderId) {
//     proceedToPayment(orderId, function(paymentInfo) {
//         showOrderSummery(paymentInfo, function() {
//             updateWalletBalance();
//         });
//     }); 
// });  // the code is growing horizontally.


// promise chaining practice code

// createOrder(cart)
//     .then(function(orderId) {
//         return proceedToPayment(orderId);
//     })
//     .then(function(paymentInfo) {
//         return showOrderSummery(paymentInfo);
//     })
//     .then(function(paymentInfo) {
//         return updateWalletBalance(paymentInfo);
//     }); // at the end of the chain, code must be ended with semicolon

// promise chaining practice code with arrow function

// createOrder(cart)
//     .then((orderId) => proceedToPayment(orderId))
//     .then( (paymentInfo) => showOrderSummery(paymentInfo))
//     .then( (paymentInfo) => updateWalletBalance(paymentInfo));

// arrow function can make the code lean and may increase the readibility of the person


// Creation of promise

const cart = ["shoes", "shirts", "pants", "perfumes"];

const promise = createOrder (cart); // createOrder is an API which will return a promise

promise.then(function(orderId){     // attaching a callback function to the promise object
    console.log(orderId);
    // proceedToPayment(orderId);
    return orderId;
})
.then( function(orderId) {
    return proceedToPayment(orderId);
})
.then( function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(err) {     // for handling error. 
    console.log(err.message); // err.message will print the message
});


// producing a function which will create a promise

function createOrder(cart) {  // this function should return a promise
    const pr = new Promise( function (resolve, reject) {    // creating promise. Promise is a constructor which takes a function with two parameters
        if( !validateCart(cart)){
            const err = new Error ("Cart in not valid");
            reject(err);
        }

        const orderId = "245614";
        if(orderId) {
            setTimeout( function (){
                resolve(orderId);
            },5000);
        }
    })

    return pr;
}

function proceedToPayment(){

    return new Promise(function(resolve,reject) {
        resolve("Payment Successful")
    })
}

function validateCart(cart) {
    return true;
}