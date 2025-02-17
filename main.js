const { app, BrowserWindow, Tray, Menu, nativeImage, screen } = require('electron');
const path = require('path');
const next = require('next');
const sharp = require('sharp');

const isDev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev: isDev });

app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors');
// app.dock.hide();

let tray = null;
let mainWindow = null;

nextApp.prepare().then(() => {
  function createWindow() {
    mainWindow = new BrowserWindow({
      // backgroundColor: '#5F9EA0' , -- before page loads 
      width: 463,
      height: 812,
      title: "H-VPN",
      frame: false,
      transparent: true,
      // alwaysOnTop: true, // not necessary
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js'),
      },
      show: false,
      movable: false,
      resizable: false,
    });

    const startUrl = isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../out/index.html')}`;

    mainWindow.loadURL(startUrl);

    if (isDev) {
      mainWindow.webContents.openDevTools();
    }
  }

  // Create the tray icon and menu
  function createTray() {
    // Convert SVG to PNG using sharp
    sharp(path.join(__dirname, 'icon.svg')) // Path to your SVG icon
      .png()
      .toBuffer()
      .then((data) => {
        const trayIcon = nativeImage.createFromBuffer(data); // Create tray icon from PNG buffer
        tray = new Tray(trayIcon);
  
        const contextMenu = Menu.buildFromTemplate([
          {
            label: 'Show Widget',
            click: () => {
              if (mainWindow) {
                mainWindow.show();
              }
            },
          },
          {
            label: 'Quit',
            click: () => {
              app.quit();
            },
          },
        ]);
  
        tray.setToolTip('H-VPN Widget');
        tray.setContextMenu(contextMenu);
  
        tray.on('click', () => {
          const trayBounds = tray.getBounds(); // Get the tray icon bounds (position and size)
          const display = screen.getPrimaryDisplay();
          const { width: screenWidth, height: screenHeight } = display.workAreaSize;
  
          const windowSize = mainWindow.getBounds(); // Get the main window size
  
          let x, y;
  
          if (process.platform === 'darwin') {
            // mac
            x = Math.round(trayBounds.x + trayBounds.width / 2 - windowSize.width / 2);
            y = Math.round(trayBounds.y + trayBounds.height);
          } else if (process.platform === 'win32') {
            // Windows
            x = Math.round(trayBounds.x + trayBounds.width / 2 - windowSize.width / 2);
            y = Math.round(screenHeight - trayBounds.height - windowSize.height);
          } else {
            //other 
            x = Math.round(trayBounds.x + trayBounds.width / 2 - windowSize.width / 2);
            y = Math.round(trayBounds.y + trayBounds.height);
          }
  
          mainWindow.setBounds({
            x: x,
            y: y,
            width: windowSize.width,
            height: windowSize.height,
          });
  
          if (mainWindow.isVisible()) {
            mainWindow.hide();
          } else {
            mainWindow.show();
          }
        });
      })
      .catch((err) => {
        console.error('Error converting SVG to PNG:', err);
      });
  }
  

  app.whenReady().then(() => {
    createWindow();
    createTray();
  });

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
