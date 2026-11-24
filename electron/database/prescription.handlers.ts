
import type { IpcMain } from "electron";
import type { PrismaClient } from "../../generated/prisma/client";

type PrescriptionPayload = {
  id: string;
  customerId: string;
  source: "IN_HOUSE" | "EXTERNAL";
  examinationId?: string | null;

  doctorName?: string | null;
  clinicName?: string | null;

  prescriptionDate?: string | Date;
  expiryDate?: string | Date | null;

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

  notes?: string | null;
};

type UpdatePrescriptionPayload = {
  id: string;
} & Partial<Omit<PrescriptionPayload, "id" | "customerId">>;

function convertDate(
  value: string | Date | null | undefined
): Date | null | undefined {
  if (value === undefined) return undefined;
  if (value === null || value === "") return null;

  return value instanceof Date ? value : new Date(value);
}

export function registerPrescriptionHandlers(
  ipcMain: IpcMain,
  prisma: PrismaClient
) {
  // Get all prescriptions for a customer
  ipcMain.handle(
    "prescriptions:getByCustomer",
    async (_event, customerId: string) => {
      return prisma.prescription.findMany({
        where: { customerId },
        orderBy: [
          { prescriptionDate: "desc" },
          { createdAt: "desc" },
        ],
        include: {
          examination: true,
        },
      });
    }
  );

  // Get a prescription by ID
  ipcMain.handle(
    "prescriptions:getById",
    async (_event, id: string) => {
      return prisma.prescription.findUnique({
        where: { id },
        include: {
          examination: true,
          customer: true,
        },
      });
    }
  );

  // Create prescription
  ipcMain.handle(
    "prescriptions:create",
    async (_event, data: PrescriptionPayload) => {
      const {
        prescriptionDate,
        expiryDate,
        ...fields
      } = data;

      return prisma.prescription.create({
        data: {
          ...fields,
          prescriptionDate:
            convertDate(prescriptionDate) ?? new Date(),
          expiryDate: convertDate(expiryDate) ?? null,
        },
      });
    }
  );

  // Update prescription
  ipcMain.handle(
    "prescriptions:update",
    async (_event, data: UpdatePrescriptionPayload) => {
      const {
        id,
        prescriptionDate,
        expiryDate,
        ...fields
      } = data;

      return prisma.prescription.update({
        where: { id },
        data: {
          ...fields,

          ...(prescriptionDate !== undefined && {
            prescriptionDate:
              convertDate(prescriptionDate) ?? new Date(),
          }),

          ...(expiryDate !== undefined && {
            expiryDate: convertDate(expiryDate),
          }),
        },
      });
    }
  );

  // Delete prescription
  ipcMain.handle(
    "prescriptions:delete",
    async (_event, id: string) => {
      return prisma.prescription.delete({
        where: { id },
      });
    }
  );
}
