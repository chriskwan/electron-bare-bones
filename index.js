const electron = require('electron')
const url = require('url')
const path = require('path')

let win // global ref so window is not closed with JS is garbage collected

electron.app.on('ready', () => {
  win = new electron.BrowserWindow({ width: 800, height: 600 })
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
})
