const fs = require("fs")
const tboy = fs.readFileSync("./Files/idris.txt", "utf-8")
console.log(tboy)


const bobo = fs.readFileSync("./Files/ope.txt", "utf-8")
console.log(bobo)

const work = fs.readFileSync("./Files/victor.txt", "utf-8")
console.log(work)

const christana = "christana is a stuborn lady"
fs.writeFileSync("./Files/christana.txt", christana)

const david = "new tech boy in town"
fs.writeFileSync("./Files/david.txt", david)

fs.readFile("./Files/omoh.txt", "utf-8", (error, data) => {
    if (error){
        console.log(error)
    }
    else{
        console.log(data)
    }
    
})

fs.readFile("./Files/femi.txt", "utf-8", (error, data) => {
    if (error){
        console.log(error)
    }
    else{
        console.log(data)
    }
    
})