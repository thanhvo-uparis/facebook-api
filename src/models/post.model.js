import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOne = async ({ message, authorId }) => {
  return prisma.post.create({
    data: {
      message,
      Author: {
        connect: {
          id: authorId,
        },
      },
    },
  });
}

export const updateOne = async ({ id, message, authorId }) => {
  return prisma.post.update({
    where: {
      id
    },
    data: {
      message,
    },
  });
}

export const deleteOne = async (id) => {
  return prisma.post.delete({
    where: { id },
  });
}

export const findOneById = async (id) => {
  return prisma.post.findUnique({
    where: { id },
  });
}

export const findAll = async () => {
  return prisma.post.findMany();
}
