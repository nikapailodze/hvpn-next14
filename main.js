const { app, BrowserWindow } = require('electron');
const path = require('path');
const next = require('next');

const isDev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev: isDev });

// Add the command line switch here
app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors');

nextApp.prepare().then(() => {
  function createWindow() {
    const mainWindow = new BrowserWindow({
      width: 1016,
      height: 812,
      title: "H-VPN",
      webPreferences: {
        nodeIntegration: false, //  false for security
        contextIsolation: true, 
        preload: path.join(__dirname, 'preload.js'), 
      },
    });

    const startUrl = isDev 
      ? 'http://localhost:3000' 
      : `file://${path.join(__dirname, '../out/index.html')}`;
      
    mainWindow.loadURL(startUrl);

    
    if (isDev) {
      mainWindow.webContents.openDevTools();
    }
  }

  app.whenReady().then(createWindow);

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
