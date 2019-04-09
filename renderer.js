// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// import { remote } from 'electron';
const {remote} =require('electron')
const updater = remote.require('electron-simple-updater');

window.updater = updater
updater.on('update-available', (meta) => {
  console.log('[updater] update avaiable', meta.version);
  updater.downloadUpdate();
});
updater.on('update-downloading', () => {});
updater.on('update-downloaded', () => {
  if (window.confirm('Restart and install updates?')) {
    updater.quitAndInstall();
  }
});
updater.on('error', (err) => {console.log(err)});

updater.checkForUpdates();