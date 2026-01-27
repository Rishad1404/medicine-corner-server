import express, { Router } from "express";
import { categoryController } from "./category.controller";


const router = express.Router();

router.post("/", categoryController.createCategory);
router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getSingleCategory);

export const categoryRouter:Router = router;
