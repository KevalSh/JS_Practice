let sum = (a, b) => {
    return a + b ;
  }
  
  //console.log(sum(5, 9));
  
  let sum1 = (a) => {
    let resultSum = (b) => {  // here resultSum function is making closure with the value coming with "a" argument
      return a + b;
    }
    
    return resultSum;
  }
  
  let result = sum1(8);  // here work for parameter for the function sum1 is done, but the sum1 returns the function resultsume
  
  console.log(result); // line is moved
  
  console.log(result(9));  
  // Now the inner function resultSum is called, it will require one parameter, 
  // still js has hold the values which are important to the scope of resultSum
  
  //console.log(sum1(9)(9));
  
  // value holding due to closure