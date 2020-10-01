import { Developer } from "./entity/Developer";

declare global {
  namespace Express {
    export interface Request {
      user?: Developer;
    }
  }
}
