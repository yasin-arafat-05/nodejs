
// <- first let's understand how asynchoronous works in js ->

let cooking=()=>{
    console.log("processing order for customer1");

    setTimeout(()=>{
        console.log("cooking done for customer1");
    },
    3000);
    
}


// main code:
console.log("taking order from customer1");

/* 
We know js run on V8 Google chrome browser engine. setTimeOut 
is an asynchronous build in function in js. While setTimeout() 
is called then, in the browser runtime we have a Call stack. When
we run a js program, 1st in the "Call Stack" main() function is called,
then line no: 16, then cooking() function . In cooking function 
we have an async function. In browser runtime time there is 
web api and outside the browser(vscode) we have some api made with
c++. Our "Call Stack" give the work to run the async function to 
this WebApi. There is also a "Callback Queue"(if we have multiple
async function for controlling the execution) that by the 
help of "Event Loop" its interact with "Call Stack". If the call 
stack is free then it's give the remaning task to the "Call Stack"
*/


/*
for visulizatoin see the image of this blog::
https://rajrajhans.com/2020/08/exploring-javascript-asyncjs/
*/


cooking();
console.log("complete order for customer1 . . .");


