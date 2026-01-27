import { Request, Response } from "express";
import { medicineService } from "./medicine.service";

const createMedicine = async (req: Request, res: Response) => {
  try {
    const result = await medicineService.createMedicine(req.body);
    res.status(201).json({
      success: true,
      message: "Medicine created successfully",
      data: result,
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

const updateMedicine = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await medicineService.updateMedicine(id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Medicine updated successfully",
      data: result,
    });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to update medicine",
        error: err,
      });
  }
};

const deleteMedicine = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await medicineService.deleteMedicine(id as string);
    res.status(200).json({
      success: true,
      message: "Medicine deleted successfully",
      data: null,
    });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to delete medicine",
        error: err,
      });
  }
};

export const medicineController = {
  createMedicine,
  getAllMedicines,
  getSingleMedicine,
  updateMedicine,
  deleteMedicine,
};
