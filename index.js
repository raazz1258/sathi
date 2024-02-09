import express, { json } from "express";
import { PORT_V } from "./src/utils/variable.js";
import { db } from "./src/utils/DBconnect.js";

const app = express();

app.use(json());
db();
app.listen(PORT_V, () => {
  console.log(`App listening on port${PORT_V}`);
});
