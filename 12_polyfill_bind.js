let name = {
    firstname : "Mavrick",
    lastname : "rupert"
}

let printName = function (hometown, country){ // arguments can be passed here apart from the object
    console.log(this.firstname + " " + this.lastname + " , " + hometown + " , " + country);
}

let printMyName = printName.bind(name, "Chicago");
printMyName("USA");  // arguments can be passed here too

// Now we have to make our version of .bind method

Function.prototype.mybind = function(...argu){ // ...argu will be the array of arguments
    let obj = this;
    console.log(obj);

    let params = argu.slice[1];  // this is the implimentation while defining the function
    
    console.log(argu)
    console.log(params);
    
    return function (...argu2){ // this is the implimentation of parameters passed in function calling
        obj.apply(argu[0], [params, ...argu2]);
    }
}


let printMyName2 = printName.mybind(name, "Chicago");
printMyName2("USA");