import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOne = async ({ content, title, authorId }) => {
  return prisma.post.create({
    data: {
      content,
      title,
      Author: {
        connect: {
          id: authorId,
        },
      },
    },
  });
}

export const updateOne = async ({ id, content, title, authorId }) => {
  return prisma.post.update({
    where: {
      id,
    },
    data: {
      title,
      content,
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
