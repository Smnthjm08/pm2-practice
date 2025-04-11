import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.status(200).json("Your app is running fine...")
})


app.listen(3000, (req, res)=>{
    console.log("Server is running on PORT 3000")
})