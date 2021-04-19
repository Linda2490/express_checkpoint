// creation of an app in the backend
const express=require("express")
const app=express()
// creation of middleware
const middleware = (req,res,next)=> {
    var nd = new Date();
    var h = nd.getHours();
    var d = nd.getDay();
    if ((h>=9 && h<=17) && (d != 0 && d != 6)) {
        return next();
    }
    return ("CLOSED !!")
}
app.use(middleware);

// app.use(express.static("public"))
app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/public/home page.html")
})

app.get("/services", (req,res)=>{
    res.sendFile(__dirname+"/public/services.html")
})

app.get("/contact", (req,res)=>{
    res.sendFile(__dirname+"/public/contact.html")
})
var myDate = new Date();

// server creation
const port=7000
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})