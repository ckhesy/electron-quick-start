let { ipcRenderer } = require('electron'); 
// 渲染进程发送消息
const sendfromrender = document.getElementById('sendfromrender');
sendfromrender.onclick = function(){
    ipcRenderer.send('msg_render2main', { name: 'param1'}, { name: 'param2'});
    ipcRenderer.on('msg_main2render',(event, args)=>{
        console.log(args)
    })
  }
 






// //回复消息
// ipcMain.on('msg_render2main', (event, param1, param2) => { 
//     event.sender.send('msg_main2render', param1, param2) 
// });

// // 可以直接使用event.reply方法，响应消息给渲染进程（与以上方法底层逻辑相同）：
// ipcMain.on('msg_render2main',(event,param1,param2)=>{
//    event.reply('msg_main2render',param1,param2)
// });

// event.returnValue为主进程的返回值letreturnValue=ipcRenderer.sendSync('msg_render2main',{name:'param1'},{name:'param2'});