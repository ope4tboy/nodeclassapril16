const http = require("http")
const fs = require("fs")
const port = 1010

const homepage = fs.readFileSync("./pages/index.html", "utf-8")

const contact = fs.readFileSync("./pages/contact.html", "utf-8")

const service = fs.readFileSync("./pages/service.html", "utf-8")

const about = fs.readFileSync("./pages/about.html", "utf-8")

const product = fs.readFileSync("./pages/product.html", "utf-8")

const error404 = fs.readFileSync("./pages/error404.html", "utf-8")




const server = http.createServer((req, res) =>{
    let path = req.url
    if (path === "/" || path === "/home"){
    res.end(homepage)
    }else if(path === "/contact"){
    res.end(contact) 
    }else if(path === "/service"){
        res.end(service)
    }else if (path === "/about"){
        res.end(about)
    }else if (path === "/product"){
        res.end("welcome to product page")
    }else{
        res.end(error404)
    }
    

});


server.listen(port, () =>{
    console.log("server is ready")
})

    