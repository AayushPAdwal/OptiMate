import { contextBridge, ipcRenderer } from "electron";
// electron/preload.ts
contextBridge.exposeInMainWorld("customerAPI", {
	getAll: () => ipcRenderer.invoke("customers:getAll"),
	create: (data) => ipcRenderer.invoke("customers:create", data),
	update: (data) => ipcRenderer.invoke("customers:update", data),
	delete: (id) => ipcRenderer.invoke("customers:delete", id)
});
export {};
