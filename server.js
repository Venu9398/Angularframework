//create express app
const exp=require("express")
const app=exp();
const path=require("path")

//connect angular app with express server
app.use(exp.static(path.join(__dirname,'./dist/MYFIRSTANGULARAPP/')))
//import APIs
const userApi=require("./APIs/user-api")


//redirect specific api based on path
app.use("/users",userApi)


//invalid path
app.use((req,res,next)=>{

    res.send({message:`path ${req.url} is invalid`})
})

//syntax error
app.use((err,req,res,next)=>{

    res.send({message:`error is ${err}`})
})







//assign port
const port=3000;
app.listen(port,()=>console.log(`server is listening at port ${port}.....`))