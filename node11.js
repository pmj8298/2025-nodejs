const express = require("express")
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3000
const _path = __dirname

const homePage = path.join(__dirname, 'index.html')
// app.use(express.json()) // js fetch / axios 용
app.use(express.urlencoded({extends:true})) // urlencoded중 기본으로 장착된 기능이 있고 확장된 기능이 있는데 확장 기능을 사용하려면 true로 적으면 된다 // HTML form 요청(body) 처리

app.get('/', (req, res) => {
    console.log(_path)
    res.sendFile(homePage)
})

app.post('/up',(req,res)=>{
    let title = req.body.title
    let content = req.body.content
    console.log(title, content)
    fs.writeFile(_path + '/' + title + '.txt', content,'utf-8', (err) => { // ,를 기준으로 앞은 어디 저장할지 경로, 뒤에는 내용
        if(err){console.log(err)}
         // res.send(`<script>alert('저장되었습니다!');history.go(-1)</script>`) // history.go(-1) : 기록된 것중에 한단계 뒤로 감, 저장되었습니다!가 뜨고 뒤로 이동한다
        res.send(`<script>alert('저장되었습니다!');location.replace('/')</script>`)
    })

})

app.listen(port, () =>{
    console.log(`http://localhost:${port} 에서 서버시작`)
})