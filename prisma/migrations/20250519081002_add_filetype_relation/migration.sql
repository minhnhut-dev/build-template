-- CreateTable
CREATE TABLE "FileType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "FileType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FileBuild" (
    "id" SERIAL NOT NULL,
    "fileName" TEXT NOT NULL,
    "numbers_created" INTEGER NOT NULL,
    "fileTypeId" INTEGER NOT NULL,

    CONSTRAINT "FileBuild_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FileType_name_key" ON "FileType"("name");

-- AddForeignKey
ALTER TABLE "FileBuild" ADD CONSTRAINT "FileBuild_fileTypeId_fkey" FOREIGN KEY ("fileTypeId") REFERENCES "FileType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
