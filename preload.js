const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
})


contextBridge.exposeInMainWorld('electronAPI', {

  ///from render to main
  setTitle: (title) => ipcRenderer.send('set-title', title),
  openFILEDailogForRFIfrontSheet: (arryofRFIFrontSheetsPaths) => ipcRenderer.send('openTheContinousFileDialogFOrRFIFRONTSHEETs', arryofRFIFrontSheetsPaths),

  CombineAllRFItoONEFile: (arryOfAllFiles) => ipcRenderer.send('combineAllTheFilesToone', arryOfAllFiles),


  

  // selcalleingafterGeetingFrontFilePDfs:(args)=>ipcRenderer.invoke("selcalleingafterGeetingFrontFilePDfs",args ),


  // form main to render

  // onUpdateCounter: (callback) => ipcRenderer.on('update-counter', (_event, value) => callback(value))

  // MarkPDFsfromToMMain: (callback) => ipcRenderer.on('markPDFsFrommain', (_event, value) => callback(value))
  
})

