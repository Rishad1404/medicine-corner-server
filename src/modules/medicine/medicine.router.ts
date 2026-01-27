import express from "express"
import { medicineController } from "./medicine.controller";

const router=express.Router();

router.post("/",medicineController.createMedicine);
router.get("/", medicineController.getAllMedicines);
router.get("/:id", medicineController.getSingleMedicine);

export const medicineRouter=router;