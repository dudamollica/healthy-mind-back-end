import { Router } from "express";
import authControllers from "../controllers/authControllers.js";
var authRouter = Router();
authRouter.post("/", authControllers.singIn);
authRouter.post("/cadastro", authControllers.signUp);
export default authRouter;
