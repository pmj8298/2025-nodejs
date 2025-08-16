const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.static(__dirname)) // __dirname : 현재 실행 중인 JS 파일이 위치한 디렉토리 경로

app.get('/',(req,res)=>{
    fs.readdir(__dirname, {withFileTypes:true, encoding:'utf-8'}, (err,data)=>{
        let list = `<h1>링크를 선택하세요</h1><ul>`

        // 위에 {withFileTypes:true} 넣으면 fs.stat ... 생략가능
        data.forEach(v=>{

            // list += `<li><a href="${v}" download>${v}[download]</a></li>` // html은 뒤에 download를 적어주면 다운 가능함
            if(v.isFile()){
                list += `<li><a href="${v.name}" >${v.name}</a></li>` // 클릭하면 파일 안의 내용을 바로 볼 수 있음
            }else{
                list += `<li>[폴더]${v.name}</li>`
            }
        })
        
        list += '</ul>'
        res.send(list) // 서버에서 프론트단으로 넘김
    })
})

app.listen(port, () =>{
    console.log(`서버가 가동되었습니다. http://localhost:${port}`)
})