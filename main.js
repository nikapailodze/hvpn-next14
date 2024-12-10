const { app, BrowserWindow, Tray, Menu, nativeImage } = require('electron');
const path = require('path');
const next = require('next');
const sharp = require('sharp'); // Import sharp for image conversion

const isDev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev: isDev });

app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors');

let tray = null;
let mainWindow = null;
app.dock.hide(); // Hides the dock icon

nextApp.prepare().then(() => {
  function createWindow() {
    mainWindow = new BrowserWindow({
      width: 463,
      height: 812,
      title: "H-VPN",
      frame: false,
      transparent: true,
      alwaysOnTop: true,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js'),
      },
      show: false,
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
          const trayBounds = tray.getBounds();  // Get the position of the tray icon

          // Position the window relative to the tray icon
          mainWindow.setPosition(trayBounds.x, trayBounds.y + trayBounds.height); // Position window below the tray icon

          if (mainWindow.isVisible()) {
            mainWindow.hide(); // Hide the window if it's already visible
          } else {
            mainWindow.show(); // Show the window if it's not visible
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
