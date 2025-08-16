const app = require('express')()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(`서버가 가동되었습니다. http://localhost:${3000}`)
})
