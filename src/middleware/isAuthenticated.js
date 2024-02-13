import { SECRET_KEY_V } from "../utils/variable.js"
import jwt from "jsonwebtoken";

export const isAuthenticated =async (req, res, next) =>{
    try {
        let tokenString = req.headers.authorization
        let token = tokenString.split(" ")[1]
        req._id = (await jwt.verify(token,SECRET_KEY_V))._id
        next()
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}