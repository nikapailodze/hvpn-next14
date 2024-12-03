const { contextBridge, ipcRenderer } = require('electron');

// Exposing safe APIs to the renderer process
contextBridge.exposeInMainWorld('electron', {
    // Example method to send messages
    sendMessage: (channel, data) => {
        ipcRenderer.send(channel, data);
    },
    // Example method to receive messages
    onReceiveMessage: (channel, func) => {
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    },
});
