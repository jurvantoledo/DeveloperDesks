import * as jwt from "jsonwebtoken";

const secret =
  process.env.JWT_SECRET || "e9rp^&^*&@9sejg)DSUA)jpfds8394jdsfn,m";

export function toJWT(data: { userId: number }) {
  return jwt.sign(data, secret, { expiresIn: "2h" });
}

export function toData(token: string) {
  return jwt.verify(token, secret);
}
