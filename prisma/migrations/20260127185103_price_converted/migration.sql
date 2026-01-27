/*
  Warnings:

  - You are about to alter the column `price` on the `medicines` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "medicines" ALTER COLUMN "price" SET DATA TYPE INTEGER;
