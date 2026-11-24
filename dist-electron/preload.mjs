import { contextBridge, ipcRenderer } from "electron";
// electron/preload.ts
contextBridge.exposeInMainWorld("customerAPI", {
	getAll: () => ipcRenderer.invoke("customers:getAll"),
	create: (data) => ipcRenderer.invoke("customers:create", data),
	update: (data) => ipcRenderer.invoke("customers:update", data),
	delete: (id) => ipcRenderer.invoke("customers:delete", id)
});
contextBridge.exposeInMainWorld("eyeExaminationAPI", {
	getByCustomer: (customerId) => ipcRenderer.invoke("examinations:getByCustomer", customerId),
	getById: (id) => ipcRenderer.invoke("examinations:getById", id),
	create: (data) => ipcRenderer.invoke("examinations:create", data),
	update: (data) => ipcRenderer.invoke("examinations:update", data)
});
contextBridge.exposeInMainWorld("prescriptionAPI", {
	getByCustomer: (customerId) => ipcRenderer.invoke("prescriptions:getByCustomer", customerId),
	getById: (id) => ipcRenderer.invoke("prescriptions:getById", id),
	create: (data) => ipcRenderer.invoke("prescriptions:create", data),
	update: (data) => ipcRenderer.invoke("prescriptions:update", data),
	delete: (id) => ipcRenderer.invoke("prescriptions:delete", id)
});
export {};
