

// normally how js code work: 
// let's we have a resturant.
// 1st, a waiter take the order of 1st customer 
// then, when cooking is done for 1st customer then it'll server 1st customer
// then, it will take order of 2nd coustomer.


let cooking=()=>{
    console.log("processing order for customer1");

    var currentTime = new Date().getTime();
    while(currentTime+3000>= new Date().getTime());
    console.log("cooking done for customer1");
}


// main code:
console.log("taking order from customer1");

/* while loop টা ৩ সেকেন্ড ধরে চলবে । আর এই সময়
browser acitivity block হয়ে যাবে । ক্লিক করতে পারবো না । 
এটা যদি অনেক সময় ধরে হয় তাহলেঃ) । এর সমাধান হচ্ছে, asynchoronous
 programming.
*/

cooking();
console.log("complete order for customer1...");



