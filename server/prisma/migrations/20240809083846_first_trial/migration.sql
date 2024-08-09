-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "content" TEXT,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);
