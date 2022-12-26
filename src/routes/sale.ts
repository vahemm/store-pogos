import express from "express";
import { createSale, getSale, getSales } from "../db/sale";

const saleRoute = express.Router();

type CreateSellerBody = {
  clientId: number;
  sellerId: number;
};

saleRoute.get("/all", async (req, res) => {
  const sales = await getSales();
  res.json(sales);
});

saleRoute.get("/:id", async (req, res) => {
  const sale = await getSale(Number(req.params.id));
  res.json(sale);
});

saleRoute.post("/", async (req, res) => {
  const { clientId, sellerId }: CreateSellerBody = req.body;
  const sale = await createSale(clientId, sellerId);
  res.json(sale);
});

export default saleRoute;
