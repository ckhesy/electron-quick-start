const {clipboard, remote, desktopCapturer,shell} = require('electron')
const os = require('os')
const fs = require('fs')
const path = require('path')

const screenshot = document.getElementById('screen-shot')
const screenshotMsg = document.getElementById('screenshot-path')
// 获取工作区域尺寸
function determineScreenShotSize () {
    const screenSize = remote.screen.getPrimaryDisplay().workAreaSize
    const maxDimension = Math.max(screenSize.width, screenSize.height)
    return {
      width: maxDimension * window.devicePixelRatio,
      height: maxDimension * window.devicePixelRatio
    }
  }
screenshot.addEventListener('click', (event) => {
  screenshotMsg.textContent = 'Gathering screens...'
  const thumbSize = determineScreenShotSize()
  let options = { types: ['screen'], thumbnailSize: thumbSize }
    console.log(thumbSize)
  desktopCapturer.getSources(options).then((sources) => {
    try{
        console.log(sources,'----')
        sources.forEach((source) => {
            console.log(source.name)
          if (source.name === 'Entire Screen' || source.name === 'Screen 1') {
            const screenshotPath = path.join(os.tmpdir(), 'screenshot.png')
           // 获取截屏
            fs.writeFile(screenshotPath, source.thumbnail.toPNG(), (error) => {
              if (error) return console.log(error)
              shell.openExternal(`file://${screenshotPath}`)
    
              const message = `Saved screenshot to: ${screenshotPath}`
              screenshotMsg.textContent = message
            })
          }
        })
    }catch(e){
        console.log(e)
    }
    return 
  })
})

// (error, sources) => {
    //     console.log(error,sources,'----')
    //     if (error) return console.log(error)
        

    //   }