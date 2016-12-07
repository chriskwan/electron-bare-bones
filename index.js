const electron = require('electron')

let win // global ref so window is not closed with JS is garbage collected

electron.app.on('ready', () => {
  win = new electron.BrowserWindow({ width: 800, height: 600 })
  win.loadURL(`file://${__dirname}/index.html`)
})
