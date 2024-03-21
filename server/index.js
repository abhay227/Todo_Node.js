import express from 'express';
import database from "./config/db.js";
import cors from "cors";
import subTaskRoutes from "./routes/subTaskRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 5000; 

//mongoose connection
database();


app.use(express.json());


const corsOptions = {
  origin: "http://localhost:3000", 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

//Routes
app.use("/subtask",subTaskRoutes);
app.use("/user",userRoutes);
app.use("/task",taskRoutes);

app.listen(5000,(req,res,err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server listening on PORT ", PORT);
    }
})
