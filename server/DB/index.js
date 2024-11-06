import mongoose from "mongoose";

const DBConnection = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.URI)

        if(conn){
            console.log("Database Connected Successfully!");
        }
        
        
    } catch (error) {
        console.log(error)
    }
}

export default DBConnection;