import { Request, Response } from "express";
import { adminService } from "./admin.service";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await adminService.getAllUsers();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Error fetching users",
    });
  }
};

const updateUserStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { role, status } = req.body;

    const result = await adminService.updateUserStatus(id as string, {
      role,
      status,
    });

    res.status(200).json({
      success: true,
      message: "User status updated successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Error updating user",
    });
  }
};

export const adminController={
    getAllUsers,
    updateUserStatus
}
