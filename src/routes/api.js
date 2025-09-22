import express from "express";
import { ProductBrandList } from "../controllers/ProductController.js";
import { ProductCategoryList } from "../controllers/ProductController.js";
import { ProductSliderList } from "../controllers/ProductController.js";
import { ProductListByBrand } from "../controllers/ProductController.js";

const router = express.Router();
router.get("/ProductBrandList", ProductBrandList);
router.get("/ProductCategoryList", ProductCategoryList);
router.get("/ProductSliderList", ProductSliderList);
router.get("/ProductListByBrand/:BrandID", ProductListByBrand);

export default router;
