import express from "express"
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = 5000;
app.use(cors()); //Allows frontend to use the API


app.get("/api/ques", async(req,res)=>{
    try{
        const response = await axios.get("https://api.jsonserve.com/Uw5CrX");
        res.json(response.data);
    }
    catch(error){
        res.status(500).json({error:"FAILED"})
    }
})

app.listen(PORT,()=>{
    console.log("SERVER STARTED")
})