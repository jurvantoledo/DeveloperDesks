import "reflect-metadata";
import * as express from "express";
import * as cors from "cors";
import { createConnection } from "typeorm";
import deskRouter from "./routers/desk";
import authRouter from "./routers/auth";

createConnection().then(() => {
  const PORT = 8000;
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/desks", deskRouter);
  app.use("/auth", authRouter);

  app.listen(PORT, () => console.log("hello from express"));
});
