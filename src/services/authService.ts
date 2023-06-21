import bcrypt from "bcrypt";
import authRepositories from "../repositories/authRepositories"
import jwt from "jsonwebtoken"
import "dotenv/config"

async function signUp({ name, email, password, image }) {
  const userExist = await authRepositories.findUserByEmail(email);
  if (userExist) throw new Error;

  const hashPass = await bcrypt.hash(password, 10);
  await authRepositories.createUser({
    name,
    email,
    password : hashPass,
    image
  });
}

async function signIn({ email, password }) {
  const userExist = await authRepositories.findUserByEmail(email);
  if (!userExist) throw new Error;

  const validPassword = await bcrypt.compare(password, userExist.password)
  if(!validPassword) throw new Error;

  const userId = userExist.id
  const token = jwt.sign({userId}, process.env.SECRET_JWT)
  await authRepositories.createSession({userId, token})
  return token;
}

export default {
  signUp, signIn
}