
// %s format variable to string.
// %d 
// %i
// %f 
// %o (javascript object)


console.log("Hello, %s!", "World");
console.log("You have %d new messages.", 5);
console.log("The value is %i.", 42.7);

// dictionary object:
const user = { name: "Alice", age: 25 };
console.log("User Info: %o", user);

// floating point number: 
const pi = 3.14159;
console.log("The value of Pi is: %f", pi);
console.log("Pi (2 decimal places): %s", pi.toFixed(2));

// console.clear() 
console.clear()


// console.count
for(var i = 5;i<10;i++){
    console.count("this is count function. ")
}


// console.countReset()
console.countReset("this is count function. ")

// instead of 6, will start from 1 
console.count("this is count function. ")
console.count("this is count function. ")


console.log("<----------trace--------------->")

// <----------------- console.trace() ----------------->
const function1 = () => console.trace()
const function2 = () => function1()
function2()


// <------------- Console.time() ------------->
// <------------- Console.timeEnd() ------------->
console.log("<-----------count time-------------->")
const sum = () => console.log(`The sum is: ${2+4}`)
const multipy = () => console.log(`The multiplication is ${3*4}`)

const timeCount = () => {
    console.time("sum")
    sum()
    console.timeEnd("sum") // string should be same 

    console.time("multipy")
    multipy()
    console.timeEnd("multipy")
}

timeCount()



// <------------- Progress bar  ------------->
// <------------- Progress bar  ------------->
console.log("<-----------ProgressBar-------------->")
const ProgressBar = require('progress');

const bar = new ProgressBar(':bar :percent', { total: 20 });

const timer = setInterval(() => {
    bar.tick(); // প্রগ্রেস বার এগিয়ে যায়
    if (bar.complete) {  // যদি কাজ শেষ হয়
        console.log('\n Task Complete! \n');
        clearInterval(timer);
    }
}, 100);

const newBar = new ProgressBar(`Installing[:bar] :percent`,{total: 30})
const TIME = setInterval(()=>{
    newBar.tick();
    if(newBar.complete){
        console.log("\n Task Complete! \n")
        clearInterval(TIME)
    }
},200);



// <------------- Progress bar  ------------->
console.log("<-----------Chalk-animation-------------->")
const chalk = require('chalk')
console.log(chalk.green("this is green color."))
console.log(chalk.blue("this is blue color."))

