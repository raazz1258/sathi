import { config } from "dotenv";

config();

export const MONGO_URL_V = process.env.MONGO_URL;
export const PORT_V = process.env.PORT
