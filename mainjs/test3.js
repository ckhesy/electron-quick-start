// remote 模块的使用
// Electron有主进程和渲染进程
// Electron的API方法和模块也是分为可以在主进程和渲染进程中使用
// 想在渲染进程中使用主进程中的模块方法时，可以使用Electron Remote解决在渲染和主进程间的通讯

var electron = require('electron') 


const { Menu } = require('electron')
// var electron = require('electron') 
// var electron = require('electron') 
// // node通过fs 获取txt的值

var BrowserWindow = electron.BrowserWindow;
// https://www.electronjs.org/docs/api/menu
var template = [
    {
        label:'开始1',
        submenu:[
            {label:'操作1'},
            {label:'操作2'}
        ]

    },
    {
        label:'编辑',
        submenu:[
            {
                label:'编辑1',
                click: () => { 
                },
            },
            {label:'编辑2'}
        ]
    }
]


// node通过fs 获取txt的值
var app = electron.app   

// var BrowserWindow = electron.BrowserWindow;

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
    var m = Menu.buildFromTemplate(template) // 构建模版才可以使用

    Menu.setApplicationMenu(m)
    mainWindow.webContents.openDevTools({mode:'right'});
    mainWindow.loadFile('./test2.html')

    mainWindow.on('closed',()=>{
        mainWindow = null
    })

})