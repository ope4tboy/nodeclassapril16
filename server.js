const http = require("http")
const port = 8000




const server = http.createServer((req, res) =>{
    res.end("welcome to my server")
})


server.listen(port, () =>{
    console.log("server started sucessfully")
})