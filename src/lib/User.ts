import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(data: any) {
  return prisma.user.create({ data });
}

export async function getUserById(id: string) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export async function updateUser(id: string, data: any) {
  return prisma.user.update({
    where: { id },
    data,
  });
}

export async function deleteUser(id: string) {
  return prisma.user.delete({ where: { id } });
}

export default prisma;
