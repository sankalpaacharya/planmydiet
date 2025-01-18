import express from 'express'

const app = express()


app.get("/",(req,res)=>{

    res.send({message:"Hello world"})

})


app.listen("3000",()=>{
    console.log("listening at port 3000")
})