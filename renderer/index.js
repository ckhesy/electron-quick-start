

console.log('========+++++')
window.onload = function(){
    var fs = require('fs'); 
    var os = require('os'); 
    console.log('========')
    var btn = this.document.querySelector('#btn')
    var mybaby = this.document.querySelector('#mybaby')
    btn.onclick = function(){
        console.log(os.homedir(),'----')
        console.log(os.tmpdir(),'----')
        fs.readFile('./renderer/sports.txt',(err,data)=>{
            console.log(err)
            mybaby.innerHTML = data
        })
    }
} 