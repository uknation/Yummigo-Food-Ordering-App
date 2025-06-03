import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongosh "mongodb+srv://yummigocluster.haota4s.mongodb.net/" --apiVersion 1 --username yukesh').then(()=>console.log("DB Connected"))
}

