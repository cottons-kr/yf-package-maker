"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var win = null;
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 1280,
        height: 720,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.setMenuBarVisibility(false);
    win.loadFile("index.html");
}
electron_1.app.on("ready", function () {
    createWindow();
});
electron_1.app.on("window-all-closed", function () {
    win = null;
    electron_1.app.exit();
});
