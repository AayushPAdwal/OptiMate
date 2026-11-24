
import { app, BrowserWindow, ipcMain } from "electron";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";
import { join, resolve } from "node:path";
import { registerExaminationHandlers } from "./database/examination.handlers";
import { registerPrescriptionHandlers } from "./database/prescription.handlers";


const databasePath = resolve(process.cwd(), "dev.db").replace(/\\/g, "/");

const adapter = new PrismaBetterSqlite3({
  url: `file:${databasePath}`,
});

const prisma = new PrismaClient({ adapter });

function createWindow() {
  const window = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1000,
    minHeight: 650,
    webPreferences: {
  preload: join(import.meta.dirname, "preload.mjs"),
  contextIsolation: true,
  nodeIntegration: false,
  sandbox: false,
},
  });

  if (app.isPackaged) {
    window.loadFile(join(app.getAppPath(), "dist", "index.html"));
  } else {
    const devServerUrl = process.env.VITE_DEV_SERVER_URL;

if (devServerUrl) {
  window.loadURL(devServerUrl);
} else {
  window.loadFile(join(app.getAppPath(), "dist", "index.html"));
}
  }
}

// Get all customers
ipcMain.handle("customers:getAll", async () => {
  try {
    console.log("Starting Prisma findMany...");

    const result = await prisma.customer.findMany({
      orderBy: { createdAt: "desc" },
    });

    console.log("Prisma query successful:", result);

    return result;
  } catch (error) {
    console.error("FULL PRISMA ERROR:", error);
    console.error(
      "ERROR STACK:",
      error instanceof Error ? error.stack : error
    );

    throw error;
  }
});

// Add a customer
ipcMain.handle("customers:create", async (_event, data) => {
  return prisma.customer.create({
    data: {
      id: data.id,
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      dob: data.dob || null,
      gender: data.gender || null,
      address: data.address || null,
      notes: data.notes || null,
    },
  });
});

// Update a customer
ipcMain.handle("customers:update", async (_event, data) => {
  return prisma.customer.update({
    where: { id: data.id },
    data: {
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      dob: data.dob || null,
      gender: data.gender || null,
      address: data.address || null,
      notes: data.notes || null,
    },
  });
});

// Delete a customer
ipcMain.handle("customers:delete", async (_event, id: string) => {
  return prisma.customer.delete({
    where: { id },
  });
});

registerExaminationHandlers(ipcMain, prisma);
registerPrescriptionHandlers(ipcMain, prisma);


app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("before-quit", async () => {
  await prisma.$disconnect();
});
