import { Router, Request, Response, NextFunction } from "express";
import { Developer } from "../entity/Developer";
import { getRepository } from "typeorm";
import * as bcrypt from "bcrypt";

const router = Router();

router.post(
  "/signup",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, name, password } = req.body;

      if (!email || !name || !password) {
        return res.status(400).send("missing parameters");
      }

      const newUser = await getRepository(Developer).create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      });

      await newUser.save();

      res.json(newUser);
    } catch (e) {
      next(e);
    }
  }
);

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).send("missing parameters");
      }

      const user = await getRepository(Developer).find({ where: { email } });

      if (bcrypt.compareSync(password, user[0].password)) {
        res.json("some jwt token");
      } else {
        res.status(401).send("invalid credentials");
      }
    } catch (e) {
      next(e);
    }
  }
);

export default router;
