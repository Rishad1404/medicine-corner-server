import { prisma } from "../../lib/prisma"


const createMedicine=async(data:any)=>{
    const result=await prisma.medicine.create({
        data
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

export const medicineService={
    createMedicine,
    getAllMedicines,
    getSingleMedicine
}