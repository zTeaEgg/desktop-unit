import { BrowserWindow } from "electron"

export function openNormalWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        //弹出的窗口有无边框,默认为有
        // frame:false,
        show: false,
        // backgroundColor: '#586148',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            webviewTag: true
        },
    })
    mainWindow.setMenuBarVisibility(false)

}