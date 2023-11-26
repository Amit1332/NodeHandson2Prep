const express = require('express')
const app =express()




app.get('/api/main',(req,res,next)=>{

res.send(`<h2>What is Express ?</h2> <br>

<h5> Express is nodejs Framework and this is also called as third party module and this is used to easy to write code or easy to use built in module thosre are already express provide like to create a server this is very easy to write with express in nodejs </h5>

`)
})


app.listen('4500',()=>{
    console.log("server started");
})