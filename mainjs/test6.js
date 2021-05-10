var electron = require('electron') 

var app = electron.app   
var  globalShortcut = electron.globalShortcut

var BrowserWindow = electron.BrowserWindow;  

var mainWindow = null ;  
app.on('ready',()=>{
    mainWindow = new BrowserWindow({width:800,height:600,
        webPreferences:{ 
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true   // 使用remote模块
        //webSecurity: false
    },})  

    globalShortcut.register('ctrl+t',()=>{

        mainWindow.loadURL('https://www.trip.com')  
    })
    mainWindow.webContents.openDevTools({mode:'right'});
    mainWindow.loadFile('./test6.html')

    //监听关闭事件，把主窗口设置为null
    mainWindow.on('closed',()=>{
        mainWindow = null
    })

})