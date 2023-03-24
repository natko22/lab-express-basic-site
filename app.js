const express = require("express");

const app =  express();

app.use(express.static("/public"));
app.use(express.static("/views"));


app.get("/index",(request,response) => response.sendFile(__dirname + "/views/index.html"));

app.get("/about",(request,response) => response.sendFile(__dirname + "/views/about_page.html"));

app.get("/work",(request,response) => response.sendFile(__dirname + "/views/work_page.html"));

app.get("/gallery",(request,response) => response.sendFile(__dirname + "/views/gallery_page.html"));


app.listen(3000,()=>console.log("my first basic website"));