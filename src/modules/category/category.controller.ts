import { Request, Response } from "express";
import { categoryService } from "./category.service";

const createCategory=async (req:Request,res:Response)=>{
    try {
        const result=await categoryService.createCategory(req.body)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({
            error:"Category Creation Failed",
            details:error
        })
    }
}

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.getAllCategories();
    res.status(200).json({
      success: true,
      message: "Categories fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch categories",
      error: err,
    });
  }
};

const getSingleCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await categoryService.getSingleCategory(id as string);
    
    if (!result) {
        res.status(404).json({
            success: false,
            message: "Category not found",
            data: null
        });
        return; 
    }

    res.status(200).json({
      success: true,
      message: "Category fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch category",
      error: err,
    });
  }
};

export const categoryController={
    createCategory,
    getAllCategories,
    getSingleCategory
}