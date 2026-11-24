-- CreateTable
CREATE TABLE "Prescription" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "examinationId" TEXT,
    "doctorName" TEXT,
    "clinicName" TEXT,
    "prescriptionDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiryDate" DATETIME,
    "sphRight" REAL,
    "cylRight" REAL,
    "axisRight" INTEGER,
    "addRight" REAL,
    "sphLeft" REAL,
    "cylLeft" REAL,
    "axisLeft" INTEGER,
    "addLeft" REAL,
    "pdDistance" REAL,
    "pdNear" REAL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Prescription_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Prescription_examinationId_fkey" FOREIGN KEY ("examinationId") REFERENCES "EyeExamination" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Prescription_customerId_idx" ON "Prescription"("customerId");

-- CreateIndex
CREATE INDEX "Prescription_examinationId_idx" ON "Prescription"("examinationId");

-- CreateIndex
CREATE INDEX "Prescription_prescriptionDate_idx" ON "Prescription"("prescriptionDate");
