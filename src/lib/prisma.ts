// lib/prisma.ts
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

// Wrap your Prisma client with the accelerate extension
const prisma = new PrismaClient().$extends(withAccelerate());
export default prisma;

const prismaWithoutAccelerate = new PrismaClient();
export { prismaWithoutAccelerate };
