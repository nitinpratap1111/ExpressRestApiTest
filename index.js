const express= require('express')
const app = express()
const uuid = require('uuid')


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

app.use(express.json())

app.get("/showAllUser",(req,res)=>{
    res.status(200).json(members)
})

app.get("/showUser/:uid",(req,res)=>{
    const id = req.params.uid
    const user = members.filter(member=> member.id === parseInt(id))
    user.length !==0 ? res.status(200).json(user) : res.status(200).json({msg:"user not found"})
    
})
app.post("/addUser/",(req,res)=>{
    //console.log(req.body)
    
    // const name = req.body.name
    // const email = req.body.email
    // const password = req.body.password
    const { name,email,password} = req.body
    //console.log(name,email,password)
    members.push({id:uuid.v4(),name,email})
    res.status(200).json(members)
})

app.delete("/deleteUser/:uid",(req,res)=>{
    const id = parseInt(req.params.uid)
    const found = members.some(member=> member.id===id)
    if(found){
        const results = members.filter(member =>member.id !==id)
        res.status(200).json(results)
    }
    else{
        res.status(400).json({msg:"no member exist with this id"})
    }

})

app.put("/updateUser/:id",(req,res)=>{
    const found = members.some(member=> member.id ===parseInt(req.params.id))
    if(found){
        const updateMember = req.body
        members.forEach(member=>{
            if(member.id === parseInt(req.params.id)){
                member.name = updateMember.name
                member.email = updateMember.email
            }

        })
        res.status(200).json(members)
        

    }
    else{
        res.status(400).json({msg:"user not found"})
    }
})




const PORT= process.env.PORT || 3002;
app.listen(PORT,()=>console.log(`express is running at ${PORT}`))
