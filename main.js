const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

app.on('ready', function(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: "#222",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavascript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile('index.html');
});

ipcMain.on('notify', (_, message) =>{
    console.log(message);

   new Notification({
       title: 'Notification',
       body: message
   }).show();
});


if(isDev){
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    });
}