function delay (ms){
    return new Promise ((resolve) => 
        setTimeout(() => {
            console.log(`Running`);
            resolve();

    }, ms));
}

async function greet() {
    console.log("Starting")

    delay(2000);
    console.log("Not blocked");

    await delay(1000);
    console.log("blocked");
}

greet();

// Case : 1
// line no.13 await is not written
// Expected output
// greet function will be called on line 20.
//"Starting" from line 11
// delay will be called, but it is async function so next line will be writtern
// "Not blocked"
// "delay" will be called for 1 sec as await has been written therefore it will wait
// "running" line no 16
// "blocked" line no 17
// "running" line no 13


// Case : 2
// line no.13 await is written
// Expected output
// greet function will be called on line 20.
//"Starting" from line 11
// delay will be called, but it is async function so next line will be writtern
// "Not blocked"
// "delay" will be called for 1 sec as await has been written therefore it will wait
// "running" line no 13
// "blocked" line no 17
// "running" line no 16