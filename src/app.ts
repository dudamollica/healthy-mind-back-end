import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routers/authRoutes";
import registersRouter from "./routers/registersRoutes";

dotenv.config();
const server = express();
server.use(cors());
server.use(express.json());
server.use(authRouter);
server.use(registersRouter)

export default server