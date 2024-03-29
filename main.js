const { app, BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 1000,
        icon: './icon.png',
    });
    win.loadURL("http://localhost:3000")
}

app.whenReady().then(() => {
    createWindow();

    app.on("active", () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    })
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") app.quit();
})
