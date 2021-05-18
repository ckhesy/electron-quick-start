const btn = this.document.querySelector('#btn')
const BrowserWindow =require('electron').remote.BrowserWindow
const remote = require('electron').remote
window.onload = function(){
   btn.onclick = ()=>{

        newWin = new BrowserWindow({
            width:500,
            height:500,
        })
        newWin.loadFile('yellow.html')
        newWin.on('close',()=>{newWin=null})

    }
}
window.addEventListener('click', () => {
    alert(11111)
})


var rightTemplate = [
    {label: '粘贴',accelerator: 'ctrl+c'},
    {label: '复制',accelerator: 'ctrl+v'}
]
const m = remote.Menu.buildFromTemplate(rightTemplate)
window.addEventListener('contextmenu', (e) => {
    // alert(2222)
    e.preventDefault()
    m.popup({window: remote.getCurrentWindow()})
})


// window.oncontextmenu = function( e) { 
//     e.preventDefault(); 
//     m.popup(); 
// };