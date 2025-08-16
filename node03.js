const express = require('express')
const path = require('path')
const app = express()

const _path = path.join(__dirname, '/dist')
// app.use('/',express.static(_path)) // dist안의 파일을 서비스 해주는 역할, 정적 서비스로 index.html 파일 서빙

// 서버사이드 렌더링, 스프링부트 타임리프와 비슷
app.get('/', (req, res) => {
  const name = '쭈'
  const age = 28
  const htmllist = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>안녕하세요</h1>
    <h2>${name}님 반갑습니다.</h2>
    <h3>${age}살이시네요</h3>
  </body>
</html>
`
  res.send(htmllist)
})

// http://localhost:3000/test?name=apple&age=850 물음표 뒤의 쿼리스트링 값을 받아서 서버에 전달
app.get('/test',(req,res)=>{
  const {name, age} = req.query
  res.send(`${name}님 안녕하세요 ${age}살 이시네요`)
})

app.listen(3000, () => {
  console.log(`서버가 가동되었습니다. http://localhost:${3000}`)
})
