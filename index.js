const express= require("express")
const cors= require("cors")
require("dotenv").config()
require("./Connection/connection")
const router=require('./Router/router')

const movieServer=express()
movieServer.use(cors())
movieServer.use(express.json())
movieServer.use(router)


const PORT=3000 || process.env.PORT

movieServer.listen(PORT,()=>{
    console.log(`MovieServer Started at Port ${PORT}`);
})

movieServer.get("/",(req,res)=>{
    res.send('<h1>Movie Server is Live now</h1>')
})