import jwt from "jsonwebtoken";
import "dotenv/config"
import authRepositories from "../repositories/authRepositories";

async function authValidation(req, res, next) {
    const { authorization } = req.headers
    if (!authorization) throw new Error;

    const parts = authorization.split(" ")
    if (parts.length !== 2) throw new Error;

    const [schema, token] = parts;
    if (schema != "Bearer") throw new Error;

    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
        try {
            if (error) throw new Error
            const { rows: [user] } = await authRepositories.findUserById(decoded.userId)
            if (!user) throw new Error;
            res.locals.user = user
        } catch (err) {
            next(err)
        }
    })
}

export default {
    authValidation
}