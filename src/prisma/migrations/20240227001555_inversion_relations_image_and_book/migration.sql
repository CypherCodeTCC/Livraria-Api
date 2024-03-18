/*
  Warnings:

  - You are about to drop the column `imageId` on the `Book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bookId]` on the table `Image` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bookId` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_imageId_fkey";

-- DropIndex
DROP INDEX "Book_imageId_key";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "imageId";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "bookId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Image_bookId_key" ON "Image"("bookId");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
