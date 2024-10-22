import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"


import cookieParser from "cookie-parser";
import connecttoMongoDB from "./db/conncetToMongoDb.js";


const app = express();
dotenv.config();
// const PORT =  process.env.PORT || 5002;
const PORT =  4000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);



app.listen(PORT, () => {
    connecttoMongoDB()
    console.log(`Server is up!!!! ${PORT}`);
})