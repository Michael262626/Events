import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined; // Extend globalThis with a 'prisma' property
}

const PrismaClientSingleton = () => {
  return new PrismaClient();
};

// Use the extended 'globalThis' type
const prisma = global.prisma ?? PrismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma; 
}

export default prisma;
