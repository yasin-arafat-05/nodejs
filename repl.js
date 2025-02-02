
const repl = require("repl")
replServer = repl.start('$ ')


// existing from the REPL:
replServer.on("exit", ()=>{
    console.log("Existing from REPL")
    process.exit = 1
})


