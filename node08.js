const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.static(__dirname))

app.get('/',(req,res)=>{
    fs.readdir(__dirname, 'utf-8', (err,data)=>{
        let list = `<h1>링크를 선택하세요</h1><ul>`

        data.forEach(v=>{

            list += `<li><a href="${v}">${v}</a></li>`
        })
        
        list += '</ul>'
        res.send(list) // 서버에서 프론트단으로 넘김
    })
})

app.listen(port, () =>{
    console.log(`서버가 가동되었습니다. http://localhost:${port}`)
})