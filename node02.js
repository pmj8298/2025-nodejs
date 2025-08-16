const express = require('express')
const logger = require('morgan')
const path = require('path')
const app = express()
const port = 3000 // javascript로 한 nodejs의 port 번호

// console.log(__dirname) // d:\pmj\nodejs

const _path = path.join(__dirname, '/dist')
// console.log(_path) // d:\pmj\nodejs\dist
app.use(express.static(_path)) // dist안의 파일을 서비스 해주는 역할, 정적 서비스로 index.html 파일 서빙




app.use(logger('tiny'))

// '/' : 3000
// '/' 접속하면 (req, res) => { res.send('Hello World!')}) 를 내보낸다
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/upload',(req, res)=>{res.send('업로드준비')})
app.get('/list',(req, res)=>{res.send('리스트')})

app.listen(port, () => {
  console.log(`서버가 가동되었습니다. http://localhost:${3000}`)
})
