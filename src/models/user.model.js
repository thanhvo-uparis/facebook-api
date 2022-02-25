import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOne = ({ email, password }) => {
  return prisma.user.create({
    data: {
      email,
      password,
    },
  });
}

export const findById = (id, select) => {
  return prisma.user.findUnique({
    where: { id },
    select,
  });
}

export const findByCredentials = ({ email, password }, select) => {
  return prisma.user.findFirst({
    where: {
      email,
      password,
    },
    select,
  });
}
