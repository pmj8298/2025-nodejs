const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// const _path = path.join(__dirname, '/dist')
// app.use(express.static(_path)) 


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/',(req,res)=>{
  const {inid} = req.query
  console.log(inid)
  const arr = ['My life is pretty','Life is Egg','I want go home','The Avengers are back']
  const pick = `
  <a href="/?inid=0">이쁘다. |</a>
  <a href="/?inid=1">계란. |</a>
  <a href="/?inid=2">집. |</a>
  <a href="/?inid=3">어벤저스.</a>
  <hr/>
  ${arr[inid] || "값을 고르세요"}
  <hr/>
  `
  res.send(pick)
})

app.listen(port, () => {
  console.log(`서버가 가동되었습니다. http://localhost:${3000}`)
})
