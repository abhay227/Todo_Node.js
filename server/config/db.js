import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const database = () => {
    mongoose.set('strictQuery', true);
    //console.log(process.env.DB_URL);
    mongoose.connect(process.env.DB_URL).then(
        (data)=>{
            console.log(`Connected with server successfully on the port : ${data.connection.host}`);
        }
    )
    .catch((error)=> console.log(`${error} : error did not conneect`));
}
export default database;