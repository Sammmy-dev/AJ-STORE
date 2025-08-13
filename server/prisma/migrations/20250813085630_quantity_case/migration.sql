/*
  Warnings:

  - You are about to drop the column `Quantity` on the `Purchases` table. All the data in the column will be lost.
  - You are about to drop the column `Quantity` on the `Sales` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `Purchases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Purchases" DROP COLUMN "Quantity",
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "public"."Sales" DROP COLUMN "Quantity",
ADD COLUMN     "quantity" INTEGER NOT NULL;
