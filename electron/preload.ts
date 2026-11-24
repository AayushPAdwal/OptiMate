
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("customerAPI", {
  getAll: () => ipcRenderer.invoke("customers:getAll"),

  create: (data: {
    id: string;
    name: string;
    phone: string;
    email?: string;
    dob?: string;
    gender?: string;
    address?: string;
    notes?: string;
  }) => ipcRenderer.invoke("customers:create", data),

  update: (data: {
    id: string;
    name: string;
    phone: string;
    email?: string;
    dob?: string;
    gender?: string;
    address?: string;
    notes?: string;
  }) => ipcRenderer.invoke("customers:update", data),

  delete: (id: string) =>
    ipcRenderer.invoke("customers:delete", id),
});

contextBridge.exposeInMainWorld("eyeExaminationAPI", {
  getByCustomer: (customerId: string) =>
    ipcRenderer.invoke("examinations:getByCustomer", customerId),

  getById: (id: string) =>
    ipcRenderer.invoke("examinations:getById", id),

  create: (data: {
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
  }) => ipcRenderer.invoke("examinations:create", data),

  update: (data: {
    id: string;
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
  }) => ipcRenderer.invoke("examinations:update", data),
});


contextBridge.exposeInMainWorld("prescriptionAPI", {
  getByCustomer: (customerId: string) =>
    ipcRenderer.invoke("prescriptions:getByCustomer", customerId),

  getById: (id: string) =>
    ipcRenderer.invoke("prescriptions:getById", id),

  create: (data: {
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
  }) => ipcRenderer.invoke("prescriptions:create", data),

  update: (data: {
    id: string;
    source?: "IN_HOUSE" | "EXTERNAL";
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
  }) => ipcRenderer.invoke("prescriptions:update", data),

  delete: (id: string) =>
    ipcRenderer.invoke("prescriptions:delete", id),
});
