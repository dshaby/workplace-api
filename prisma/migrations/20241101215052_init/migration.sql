-- CreateTable
CREATE TABLE "Workplace" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "Workplace_pkey" PRIMARY KEY ("id")
);
