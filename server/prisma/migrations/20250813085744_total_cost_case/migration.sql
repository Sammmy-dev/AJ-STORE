/*
  Warnings:

  - You are about to drop the column `totaCost` on the `Purchases` table. All the data in the column will be lost.
  - Added the required column `totalCost` to the `Purchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Purchases" DROP COLUMN "totaCost",
ADD COLUMN     "totalCost" DOUBLE PRECISION NOT NULL;
