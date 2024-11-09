/* eslint-disable no-unused-vars */
import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

// open the database connection
let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // for the development environment, keep only one connection open
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
