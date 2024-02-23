/*
  Warnings:

  - A unique constraint covering the columns `[imageId]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Book_authorId_key";

-- DropIndex
DROP INDEX "Book_genreId_key";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "imageId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "storageName" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_storageName_key" ON "Image"("storageName");

-- CreateIndex
CREATE UNIQUE INDEX "Book_imageId_key" ON "Book"("imageId");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
