import { UserStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { UserRole } from "../../middlewares/auth";

const getAllUsers = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      status:true
    }
  });
  return result;
};

const updateUserStatus= async (userId: string, payload: { role?: UserRole; status?: UserStatus }) => {
  const result = await prisma.user.update({
    where: { id: userId },
    data: payload 
  });
  return result;
};

export const adminService={
    getAllUsers,
    updateUserStatus

}