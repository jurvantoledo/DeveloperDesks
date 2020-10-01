import { Router, Request, Response, NextFunction } from "express";
import { Desk } from "../entity/Desk";
import { getRepository } from "typeorm";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const limit = Number(req.query.limit) || 10;
    const offset = Number(req.query.offset) || 0;

    const desks = await getRepository(Desk).findAndCount({
      take: limit,
      skip: offset,
      select: ["id", "uri", "developer"],
      relations: ["developer"],
    });

    const noPasswords = desks[0].map(d => {
      const { password, ...developer } = d.developer;
      return { ...d, developer };
    });

    const response = {
      total: desks[1],
      offset,
      limit,
      results: noPasswords,
    };

    res.json(response);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const desk = await Desk.findByIds([req.params.id]);
    res.json(desk[0]);
  } catch (e) {
    next(e);
  }
});

router.get(
  "/:id/comments",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const desk = await Desk.findByIds([req.params.id], {
        relations: ["comments"],
      });
      res.json(desk[0].comments);
    } catch (e) {
      next(e);
    }
  }
);

export default router;
