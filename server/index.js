import express from "express";
import dotenv from "dotenv"
import DBConnection from "./DB/index.js";


dotenv.config();
const app = express();

// Middleware
app.use(express.json())
app.use(express.urlencoded())

// Database Connection
DBConnection()

app.listen(process.env.PORT,()=>{
    console.log("Server is Running!");
})