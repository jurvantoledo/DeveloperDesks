const { toData } = require("./jwt");
import { Developer } from "../entity/Developer";
import { getRepository } from "typeorm";

export async function auth(req, res, next) {
  const splittedHeader =
    req.headers.authorization && req.headers.authorization.split(" ");
  if (splittedHeader && splittedHeader[0] === "Bearer" && splittedHeader[1]) {
    try {
      const data = toData(splittedHeader[1]);
      const user = await getRepository(Developer).findByIds([data.userId]);
      const { password, ...restOfUser } = user[0];
      req.user = restOfUser;
      next();
    } catch (e) {
      console.log(e.message);
      return res.status(401).send("Invalid token");
    }
  } else {
    return res.status(401).send("Invalid token");
  }
}
