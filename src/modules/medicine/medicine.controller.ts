import { Request, Response } from "express";
import { medicineService } from "./medicine.service";

const createMedicine = async (req: Request, res: Response) => {
  try {
    const result = await medicineService.createMedicine(req.body);
    res.status(201).json({
        success:true,
        message:"Medicine created successfully",
        data:result
    });
  } catch (error) {
    res.status(500).json({
      error: "Medicine Creation Failed",
      details: error,
    });
  }
};

const getAllMedicines = async (req: Request, res: Response) => {
  try {
    const result = await medicineService.getAllMedicines();
    res.status(200).json({
      success: true,
      message: "Medicines fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch medicines",
      error: err,
    });
  }
};

const getSingleMedicine = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await medicineService.getSingleMedicine(id as string);
    res.status(200).json({
      success: true,
      message: "Medicine fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch medicine",
      error: err,
    });
  }
};



export const medicineController={
    createMedicine,
    getAllMedicines,
    getSingleMedicine
}