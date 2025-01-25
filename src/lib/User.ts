import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(data: Omit<User, "id">): Promise<User> {
  return prisma.user.create({ data });
}



export async function getUserById(id: string): Promise<User | null> {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return prisma.user.findUnique({ where: { email } });
}

export async function updateUser(
  id: string,
  data: Partial<Omit<User, "id">>
): Promise<User> {
  return prisma.user.update({
    where: { id },
    data,
  });
}

export async function deleteUser(id: string): Promise<User> {
  return prisma.user.delete({ where: { id } });
}

export default prisma;
