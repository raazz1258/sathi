import mongoose from "mongoose";
import { MONGO_URL_V } from "./variable.js";

export const db = () => {
  mongoose
    .connect(MONGO_URL_V)
    .then(() => {
      console.log("Connected to database");
    })
    .catch(() => {
      console.log("Failed to connect to database");
    });
};
