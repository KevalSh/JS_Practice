const promise1 = new Promise((resolve, reject) => {
    resolve(console.log("Hello")); 
});
   
    


async function prom1 (){
    return promise1;
}

const dataProm1 = prom1();

console.log(dataProm1);
