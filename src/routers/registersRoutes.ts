import { Router } from "express";
import registersControllers from "../controllers/registersControllers"
import authMiddleware from "../middlewares/authMiddleware"

const registersRouter = Router();

registersRouter.post("/today", authMiddleware.authValidation, registersControllers.todayRegister);

export default registersRouter