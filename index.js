import express, { json } from "express";
import { PORT_V } from "./src/utils/variable.js";
import { db } from "./src/utils/DBconnect.js";
import { userRouter } from "./src/routes/userRoutes.js";


const app = express();
app.use(json());
app.use("/user", userRouter);
db();





app.listen(PORT_V, () => {
  console.log(`App listening on port: ${PORT_V}`);
});
