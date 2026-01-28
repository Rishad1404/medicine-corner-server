import { Request, Response } from "express";
import { orderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const result = await orderService.createOrder(userId, req.body);

    res.status(200).json({
      success: true,
      message: "Order placed successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};


const getMyAllOrders = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const result = await orderService.getMyAllOrders(userId);
    
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully",
      data: result
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: "Error fetching orders" });
  }
};


const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const result = await orderService.getSingleOrder(req.params.id as string, userId);

    res.status(200).json({
      success: true,
      message: "Order details fetched",
      data: result
    });
  } catch (err: any) {
    res.status(404).json({ success: false, message: err.message });
  }
};

export const orderController = {
  createOrder,
  getMyAllOrders,
  getSingleOrder
};

