var electron = require('electron') 
// node通过fs 获取txt的值
var app = electron.app   

var BrowserWindow = electron.BrowserWindow;

var mainWindow = null ;
app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:800,
        height:500,
        webPreferences:{ 
            nodeIntegration: true,
            contextIsolation: false,
            //webSecurity: false
        },
        // webContents: {
        //     openDevTools: true   //不想要控制台直接把这段删除
        //   },
    })
    mainWindow.webContents.openDevTools({mode:'right'}); //打开调试模式
    mainWindow.loadFile('./test.html')

    mainWindow.on('closed',()=>{
        mainWindow = null
    })

})