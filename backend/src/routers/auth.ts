import { Router, Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import * as bcrypt from "bcrypt";
import { Developer } from "../entity/Developer";
import { toJWT } from "../auth/jwt";

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

      if (!user[0] || !bcrypt.compareSync(password, user[0].password)) {
        res.status(401).send("invalid credentials");
      } else {
        const token = toJWT({ userId: user[0].id });
        res.json({ jwt: token });
      }
    } catch (e) {
      next(e);
    }
  }
);

export default router;
