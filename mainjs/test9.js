// remote 模块的使用
// Electron有主进程和渲染进程
// Electron的API方法和模块也是分为可以在主进程和渲染进程中使用
// 想在渲染进程中使用主进程中的模块方法时，可以使用Electron Remote解决在渲染和主进程间的通讯

var electron = require('electron') 
const {ipcMain} = electron
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
            enableRemoteModule: true   // 使用remote模块
            //webSecurity: false
        },
        // webContents: {
        //     openDevTools: true   //不想要控制台直接把这段删除
        //   },
    })
    mainWindow.webContents.openDevTools({mode:'right'});
    mainWindow.loadFile('./test9.html')
    // 主进程监听消息
    ipcMain.on('msg_render2main', (event, arg) => { 
        console.log(arg) // prints "ping"
        // 主 进程 向渲染进程发送消息
        mainWindow.webContents.send('msg_main2render', {param1: '1111'})
        event.reply('asynchronous-reply', 'pong')
    }); 


    mainWindow.on('closed',()=>{
        mainWindow = null
    })

})