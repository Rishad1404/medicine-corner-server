import express from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { orderController } from "./order.controller";


const router=express.Router();


router.post("/",auth(UserRole.CUSTOMER),orderController.createOrder);
router.get("/",auth(UserRole.CUSTOMER),orderController.getMyAllOrders);
router.get("/:id",auth(UserRole.CUSTOMER),orderController.getSingleOrder);


export const orderRouter=router;