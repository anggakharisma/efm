// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
const drivelist = require('drivelist')

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		frame: false,
		width: 1280,
		height: 720,
		minWidth: 800,
		backgroundColor: '#FFF',
		webPreferences: {
			devTools: isDev,
			nodeIntegration: true,
            enableRemoteModule: true,
            worldSafeExecuteJavaScript: true
		}
	})

	mainWindow.setMenuBarVisibility(false)

	mainWindow.loadURL(
		isDev
			? 'http://localhost:3000'
			: `file://${path.join(__dirname, '../build/index.html')}`
	)

	mainWindow.webContents.openDevTools()
}

app.on('ready', () => {
	ipcMain.on('drive-message', async (event, arg) => {
		const drives = await drivelist.list()
		event.reply('send-drive', { drives, os: process.platform })
	})
	createWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0)
			createWindow()
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})
