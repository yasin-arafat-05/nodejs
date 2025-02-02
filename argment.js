
// print all the argument value from terminal in a list
console.log(process.argv)
console.log(`print value with slicing: ${process.argv.slice()[2]}`)

// print all the argument value with an loop form the terminal:
process.argv.forEach( (element,index)=>{
    console.log(`${index}  value: ${element}`)
});


/*
-----------------> with minimist: <--------------------
*/
const mini = require("minimist")
console.log(`with minimist: ${mini(process.argv.slice(2))}`)


