import { config } from "dotenv";

config();

export const MONGO_URL_V = process.env.MONGO_URL;
export const PORT_V = process.env.PORT
export const EMAIL_V = process.env.APP_EMAIL
export const PASSWORD_V = process.env.APP_PASSWORD
export const SECRET_KEY_V = process.env.SECRET_KEY
