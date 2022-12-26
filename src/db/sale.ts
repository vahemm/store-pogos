import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getSales = async () => {
  return await prisma.sale.findMany();
};

export const getSale = async (id: number) => {
  return await prisma.sale.findUnique({
    where: {
      id,
    },
  });
};

export const createSale = async (clientId: number, sellerId: number) => {
  return await prisma.sale.create({
    data: {
      sellerId,
      clientId,
    },
  });
};
