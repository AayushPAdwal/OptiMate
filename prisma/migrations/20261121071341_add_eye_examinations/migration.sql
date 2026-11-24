-- CreateTable
CREATE TABLE "EyeExamination" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "examinationDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "examinedBy" TEXT,
    "chiefComplaints" TEXT,
    "unaidedVisionRight" TEXT,
    "correctedVisionRight" TEXT,
    "pinholeVisionRight" TEXT,
    "finalVisionRight" TEXT,
    "unaidedVisionLeft" TEXT,
    "correctedVisionLeft" TEXT,
    "pinholeVisionLeft" TEXT,
    "finalVisionLeft" TEXT,
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
    "iopRight" REAL,
    "iopLeft" REAL,
    "nearVisionRight" TEXT,
    "nearVisionLeft" TEXT,
    "examinationFindings" TEXT,
    "recommendations" TEXT,
    "followUpDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "EyeExamination_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "EyeExamination_customerId_idx" ON "EyeExamination"("customerId");

-- CreateIndex
CREATE INDEX "EyeExamination_examinationDate_idx" ON "EyeExamination"("examinationDate");
