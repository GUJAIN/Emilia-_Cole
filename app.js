const express = require("express");
const app = express();
const path = require("path");

app.listen(3000,()=>{
    console.log("servidor en linea");
})
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/view/index.html"))
})
app.get("/music",(req,res)=>{
    res.sendFile(path.join(__dirname,"./view/music.html"))
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"./view/about.html"))
})
app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"./view/contact.html"))
})

app.use(express.static(path.join(__dirname, "./public")))