import { app, BrowserWindow  } from "electron";

let win = null

function createWindow() {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    win.setMenuBarVisibility(false)
    win.loadFile("index.html")
}

app.on("ready", () => {
    createWindow()
})
app.on("window-all-closed", () => {
    win = null
    app.exit()
})