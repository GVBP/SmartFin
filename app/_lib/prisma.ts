/* eslint-disable no-unused-vars */
import { PrismaClient } from "@prisma/client";

let cachedPrisma: PrismaClient | undefined;
// open the database connection
let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // for the development environment, keep only one connection open
  if (!cachedPrisma) {
    cachedPrisma = new PrismaClient();
  }
  prisma = cachedPrisma;
}

export const db = prisma;
