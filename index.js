const express= require('express')
const app = express()


const members = [
    {
        id: 1,
        name:"john doe",
        email:"joh@gmail.com",
        status:"active"
    },
    {
        id: 2,
        name:"cohn doe",
        email:"hish@gmail.com",
        status:"active"
    },
    {
        id: 3,
        name:"rohn doe",
        email:"h@gjsbdmail.com",
        status:"inactive"
    },

]

app.get("/showAllUser",(req,res)=>{
    res.status(200).json(members)
})

app.get("/showUser/:uid",(req,res)=>{
    const id = req.params.uid
    const user = members.filter(member=> member.id === parseInt(id))
    user.length !==0 ? res.status(200).json(user) : res.status(200).json({msg:"user not found"})
    
})



const PORT= 3002;
app.listen(PORT,()=>console.log(`express is running at ${PORT}`))
