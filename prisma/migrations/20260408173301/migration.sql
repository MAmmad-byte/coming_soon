-- CreateTable
CREATE TABLE "Waitlist" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(55) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL,
    "deletedAt" TIMESTAMP(0),

    CONSTRAINT "Waitlist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Waitlist_id_idx" ON "Waitlist"("id");
