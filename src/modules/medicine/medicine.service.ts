import { prisma } from "../../lib/prisma"


const createMedicine=async(data:any,userId:string)=>{
    const result=await prisma.medicine.create({
        data:{
          ...data,
          sellerId:userId
        }
    })
    return result;
}

const getAllMedicines = async () => {
  const result = await prisma.medicine.findMany({
    include: {
      category: true 
    }
  });
  return result;
};

const getSingleMedicine= async (id: string) => {
  const result = await prisma.medicine.findUnique({
    where: {
      id: id
    },
    include: {
      category: true
    }
  });
  return result;
};

const updateMedicine = async (id: string, data: any) => {
  const result = await prisma.medicine.update({
    where: { id },
    data: data,
  });
  return result;
};

const deleteMedicine= async (id: string) => {
  const result = await prisma.medicine.delete({
    where: { id },
  });
  return result;
};

export const medicineService={
    createMedicine,
    getAllMedicines,
    getSingleMedicine,
    updateMedicine,
    deleteMedicine
}