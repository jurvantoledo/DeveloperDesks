import * as bcrypt from "bcrypt";

export const seedData = [
  {
    uri:
      "https://res.cloudinary.com/daxjf54p3/image/upload/v1601306412/hmvcvmdpj3dqgca4vtqk.jpg",
    developer: {
      name: "Michiel",
      password: bcrypt.hashSync("test", 10),
      email: "michiel@codaisseur.com",
    },
  },
  {
    uri:
      "https://res.cloudinary.com/daxjf54p3/image/upload/v1601299132/pgzw8qoegk56qbnpatac.jpg",
    developer: {
      name: "Matias",
      password: bcrypt.hashSync("test", 10),
      email: "matias@codaisseur.com",
    },
  },
  {
    uri:
      "https://res.cloudinary.com/daxjf54p3/image/upload/v1601299126/kdcdh6jtrw1qwwpjopjt.jpg",
    developer: {
      name: "Hande & Joost",
      password: bcrypt.hashSync("test", 10),
      email: "hande+joost@codaisseur.com",
    },
  },
  {
    uri:
      "https://res.cloudinary.com/daxjf54p3/image/upload/v1601299119/dpsbdc0hq2qr9jebk5zh.jpg",
    developer: {
      name: "Maria",
      password: bcrypt.hashSync("test", 10),
      email: "maria@codaisseur.com",
    },
  },
  {
    uri:
      "https://res.cloudinary.com/daxjf54p3/image/upload/v1601298639/dmi3ccpbwbauyotcx5ui.jpg",
    developer: {
      name: "Alex",
      password: bcrypt.hashSync("test", 10),
      email: "alexandra@codaisseur.com",
    },
  },
];
