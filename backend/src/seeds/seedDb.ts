import "reflect-metadata";
import { createConnection } from "typeorm";
import { Desk } from "../entity/Desk";
import { Developer } from "../entity/Developer";
import { seedData } from "./dummyData";
// const seedData = require("./dummyData.");
console.log(seedData);
async function seed() {
  const connection = await createConnection();
  const developersRepo = connection.getRepository(Developer);
  const desksRepo = connection.getRepository(Desk);
  console.log("connection created!");

  seedData.forEach(async desk => {
    try {
      const { developer } = desk;
      const newDev = developersRepo.create({
        firstName: developer.name,
        email: developer.email,
        password: "test",
      });
      await newDev.save();

      const newDesk = desksRepo.create({
        imageUrl: desk.uri,
        developer: newDev,
      });

      await newDesk.save();
    } catch (e) {
      console.log(e.message);
    }
  });
}

seed();
