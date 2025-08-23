const express = require("express")
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3000

const filePath = path.join(__dirname, 'test1.txt')

// filePath에 test1.txt가 있나 없나 확인해보는 작업 파일이 없으면 에러가 날 것
fs.stat(filePath, (err, stat) =>{
    // console.log('err',err)
    if(err){console.log('파일이 없습니다')}
    console.log('stat',stat)
})

// 파일 내용작성
// fs.writeFile(filePath, '파일 작성중', 'utf-8', (err)=>{
//     console.log('파일을 생성 후 내용을 작성하였습니다.')
// })

fs.appendFile(filePath, "\n 추가로 작성되었습니다." , 'utf-8', (err) =>{
     console.log('파일에 내용을 추가하였습니다.')
 })

 fs.readFile(filePath, 'utf-8', (err, data) =>{
     console.log('읽은내용:', data)
 })

app.listen(port, () =>{
    console.log(`http://localhost:${port} 에서 서버시작`)
})