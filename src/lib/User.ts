import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// Define type explicitly for data parameter
export async function createUser(
  data: Prisma.UserCreateInput
): Promise<Prisma.User> {
  return prisma.user.create({ data });
}

export async function getUserById(id: string): Promise<Prisma.User | null> {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(
  email: string
): Promise<Prisma.User | null> {
  return prisma.user.findUnique({ where: { email } });
}

export async function updateUser(
  id: string,
  data: Prisma.UserUpdateInput
): Promise<Prisma.User> {
  return prisma.user.update({
    where: { id },
    data,
  });
}

export async function deleteUser(id: string): Promise<Prisma.User> {
  return prisma.user.delete({ where: { id } });
}

export default prisma;
