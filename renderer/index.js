

console.log('========+++++')
const axios = require('axios');
window.onload = function(){
    var fs = require('fs'); 
    var os = require('os'); 
    console.log('========')
    var btn = this.document.querySelector('#btn')
    var btn2 = this.document.querySelector('#btn2')
    var mybaby = this.document.querySelector('#mybaby')
    btn.onclick = function(){
        console.log(os.homedir(),'----')
        console.log(os.tmpdir(),'----')
        fs.readFile('./renderer/sports.txt',(err,data)=>{
            console.log(err)
            mybaby.innerHTML = data
        })
    }
    btn2.onclick = () => {
        axios.post('https://www.trip.com/restapi/soa2/14427/json/GetLowPriceInCalender',{
            "DDate":"2020-5-25",
            "DCity":"SHA",
            "ACity":"BJS",
            "flightWayType":"RT",
            "startInterval":4,
            "endInterval":4,
            "OffSet":0,
            "head":{
                "locale":"en_US",
                "source":"Online",
                "currency":"USD"
            }}).then(
            (res) => {
                console.log(res)
                mybaby.innerHTML = res.data.lowPriceInCalenderDtoInfoList.map(ele => {
                    return `<div>${ele.currencyPriceDisplayValue}</div>`
                })
            }
        ).catch((e)=>{
            console.log(e)
            mybaby.innerHTML = '出错啦'
        })
    }
} 