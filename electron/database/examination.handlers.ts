
import type { IpcMain } from "electron";
import type { PrismaClient } from "../../generated/prisma/client";

type ExaminationPayload = {
  id: string;
  customerId: string;
  examinationDate?: string | Date | null;
  examinedBy?: string | null;
  chiefComplaints?: string | null;

  unaidedVisionRight?: string | null;
  correctedVisionRight?: string | null;
  pinholeVisionRight?: string | null;
  finalVisionRight?: string | null;

  unaidedVisionLeft?: string | null;
  correctedVisionLeft?: string | null;
  pinholeVisionLeft?: string | null;
  finalVisionLeft?: string | null;

  sphRight?: number | null;
  cylRight?: number | null;
  axisRight?: number | null;
  addRight?: number | null;

  sphLeft?: number | null;
  cylLeft?: number | null;
  axisLeft?: number | null;
  addLeft?: number | null;

  pdDistance?: number | null;
  pdNear?: number | null;
  iopRight?: number | null;
  iopLeft?: number | null;

  nearVisionRight?: string | null;
  nearVisionLeft?: string | null;

  examinationFindings?: string | null;
  recommendations?: string | null;
  followUpDate?: string | Date | null;
};

type UpdateExaminationPayload = {
  id: string;
} & Partial<Omit<ExaminationPayload, "id" | "customerId">>;

function convertDate(
  value: string | Date | null | undefined
): Date | null | undefined {
  if (value === undefined) return undefined;
  if (value === null || value === "") return null;

  return value instanceof Date ? value : new Date(value);
}

export function registerExaminationHandlers(
  ipcMain: IpcMain,
  prisma: PrismaClient
) {
  ipcMain.handle(
    "examinations:getByCustomer",
    async (_event, customerId: string) => {
      return prisma.eyeExamination.findMany({
        where: { customerId },
        orderBy: [
  { examinationDate: "desc" },
  { createdAt: "desc" },
],
      });
    }
  );

  ipcMain.handle(
    "examinations:getById",
    async (_event, id: string) => {
      return prisma.eyeExamination.findUnique({
        where: { id },
      });
    }
  );

  ipcMain.handle(
    "examinations:create",
    async (_event, data: ExaminationPayload) => {
      const { examinationDate, followUpDate, ...fields } = data;

      return prisma.eyeExamination.create({
        data: {
          ...fields,
          examinationDate:
            convertDate(examinationDate) ?? new Date(),
          followUpDate: convertDate(followUpDate) ?? null,
        },
      });
    }
  );

  ipcMain.handle(
    "examinations:update",
    async (_event, data: UpdateExaminationPayload) => {
      const { id, examinationDate, followUpDate, ...fields } = data;

      return prisma.eyeExamination.update({
        where: { id },
        data: {
          ...fields,
          ...(examinationDate !== undefined && {
            examinationDate:
              convertDate(examinationDate) ?? new Date(),
          }),
          ...(followUpDate !== undefined && {
            followUpDate: convertDate(followUpDate),
          }),
        },
      });
    }
  );
}
