

console.log('========+++++')
window.onload = function(){
    var fs = require('fs'); 
    console.log('========')
    var btn = this.document.querySelector('#btn')
    var mybaby = this.document.querySelector('#mybaby')
    btn.onclick = function(){
        fs.readFile('./renderer/sports.txt',(err,data)=>{
            console.log(err)
            mybaby.innerHTML = data
        })
    }
} 