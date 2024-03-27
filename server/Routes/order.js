import express from "express";

import { varifyToken } from "../Authentication/vairifyUserToken.js";
import { addMultipleProductsToOrder, addToOrder } from "../Controller/order.js";

const router = express.Router();

router
  .post("/add/single/order", varifyToken, addToOrder)
  .post("/add/multiple/orders", varifyToken, addMultipleProductsToOrder);

export default router;
