//create mini express app
const exp=require('express')
const userApi=exp.Router();
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const expressErrorhandler=require("express-async-handler")

//body parser Api
userApi.use(exp.json())




//import mongoClient
const mc=require("mongodb").MongoClient;

//connection string
const databaseurl="mongodb+srv://my-first_app:0ynjF83VvKd9hCTR@cluster0.dv7gv.mongodb.net/my_database?retryWrites=true&w=majority"


let empobj;

//connedct to dB
mc.connect(databaseurl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err){
        console.log("err in database connection",err)
    }
    else{
        //get database obj
        let databaseobj=client.db("my_database")
        //create user collectiononject
        empobj = databaseobj.collection("employee_data")
        console.log("connected to database")

    }
})

//https://localhost:3000/user/getusers
 //using async and await
 userApi.get("/getusers",expressErrorhandler(async (req,res,next)=>{

    let userList = await empobj.find().toArray()
    res.send({message: userList })
 }))



//https://localhost:3000/user/getusers/<username>
//using async and await
userApi.get("/getusers/:username",expressErrorhandler(async (req,res,next)=>{

    let un=req.params.username;

    //search
    let userobj=await empobj.findOne({username:un})

    if(userobj===null){
        res.send({message:"username not existed"})
    }
    else{
        res.send({message:userobj})
    }
}))


//using async and await
//https://localhost:3000/user/createuser
userApi.post("/createuser",expressErrorhandler(async (req,res,next)=>{
    //get userobj
    let newuser=req.body;
    //search for exisiting user
    let user=await empobj.findOne({username:newuser.username})
    //if user existed
    if(user!==null){
        res.send({message:"user already existed"})
    }
    else{
        //hash password
        let hashedpassword=await bcrypt.hash(newuser.password,7)
        //replace password
        newuser.password=hashedpassword
        //insert
        await empobj.insertOne(newuser)
        res.send({message:"user created"})
    }
}))


//using async and await
//https://localhost:3000/user/updateuser
userApi.put('/updateuser/:username',expressErrorhandler(async (req,res,next)=>{
    //get modified user
    let modifieduser=req.body;
    //update
    await empobj.updateOne({username:modifieduser.username},{$set:{...modifieduser}})
    //send res
    res.send({message:"user modified"})

}))
 

// http://localhost:3000/users/deleteuser
//using async and await 
userApi.delete('/deleteuser/:username',expressErrorhandler(async (req,res,next)=>{
         //get user
         let deleteuser=req.params.username;
         //deleteuser
         let user=await empobj.findOne({username:deleteuser})

         if(user===null){
             res.send({message:"user not existed"})
         }
         else{
              await empobj.deleteOne({username:deleteuser})
              res.send("user deleted")
         }
}))




///user login
userApi.post('/login',expressErrorhandler(async(req,res)=>{

    //get user credentials
    let credentials = req.body;
    //search user by username
    let user=await empobj.findOne({username:credentials.username})
    //if user not found
     if(user===null){
         res.send({message:"invalid username"})
     }
     else{
         //compare the password
         let result = await bcryptjs.compare(credentials.password,user.password)
         //if not matched
         if(result===false){
             res.send({message:"invalid password"})
         }
         else{
             //create a token
             let token=jwt.sign({username:credentials.username},'abcdef',{expiresIn:120})
             //send token to client
             res.send({message:"login success",token: token,username:credentials.username})
         }
     }
}))
 
//export
module.exports=userApi;