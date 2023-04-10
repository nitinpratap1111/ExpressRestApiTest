const express= require('express')
const app = express()
//app.get("/",(req,res) =>{
//    res.write("<h1>HELLO WORLD</h1>")
//    res.end()
//})

const middleware= (req,res,next)=>{
    console.log("hi this is middleware")
    next()
}

//app.use(middleware)

app.get("/" ,middleware,(req,res)=> {
    res.send("hi this is get request")
})

app.post("/" ,(req,res)=> {
    res.send("hi this is POST request")
})

app.put("/" ,(req,res)=> {
    res.send("hi this is PUT request")
})

app.delete("/" ,(req,res)=> {
    res.send("hi this is DELETE request")
})



const PORT= 3002;
app.listen(PORT,()=>console.log(`express is running at ${PORT}`))
