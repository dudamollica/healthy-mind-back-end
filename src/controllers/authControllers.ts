import authServices from "../services/authService"
import httpStatus from "http-status";

async function signUp(req, res) {
    const { name, email, password, image} = req.body;  
    try {
      await authServices.signUp({name, email, password, image});
      return res.sendStatus(httpStatus.OK);
    } catch (error) {
      return res.status(httpStatus.UNAUTHORIZED).send({});
    }
  }
  
  export async function singIn(req, res) {
    const { email, password} = req.body;
    try {
      const token = await authServices.signIn({ email, password });
      console.log(token)
      return res.status(httpStatus.OK).send(token);
    } catch (error) {
      return res.status(httpStatus.UNAUTHORIZED).send({});
    }
  }

  export default {
    signUp, singIn
  }