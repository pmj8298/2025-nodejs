const express = require('express')
const logger = require('morgan')
const app = express()
const port = 3000 // javascript로 한 nodejs의 port 번호

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
