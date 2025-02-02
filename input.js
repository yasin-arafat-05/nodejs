const readline = require("readline")
const rl = readline.createInterface(
    {input: process.stdin,
    output: process.stdout }
)

rl.question(`What is you name?`, (name)=>{
    console.name(`Hi! ${name}`)
    rl.close()
});



console.log("<---------------- take input with  promt-sync---------------->")
const prompt = require('prompt-sync')()
const input = prompt("What is your name?")
console.log(`Hi! ${input}`)

