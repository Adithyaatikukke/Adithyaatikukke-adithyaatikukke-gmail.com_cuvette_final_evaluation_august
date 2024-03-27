import express from "express";
import {
  getAllProducts,
  getAllProductsByColourFilter,
  getAllProductsByCompanyFilter,
  getAllProductsByKeywordFilter,
  getAllProductsByPriceFilter,
  getAllProductsBySortAscFilter,
  getAllProductsBySortDescFilter,
  getAllProductsByUseTypeFilter,
  getSignleProduct,
} from "../Controller/Product.js";

const router = express.Router();

router
  .get("/get", getAllProducts)
  .get("/get/single/product/:productId", getSignleProduct)
  .get("/filter/keyword", getAllProductsByKeywordFilter)
  .get("/filter/colour", getAllProductsByColourFilter)
  .get("/filter/useType", getAllProductsByUseTypeFilter)
  .get("/filter/company", getAllProductsByCompanyFilter)
  .get("/filter/sort/asc", getAllProductsBySortAscFilter)
  .get("/filter/sort/desc", getAllProductsBySortDescFilter)
  .post("/filter/price", getAllProductsByPriceFilter);
export default router;
