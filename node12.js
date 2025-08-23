const express = require("express")
const path = require('path')
const multer = require('multer')

const app = express()
const port = 3000
const _path = __dirname

app.use('/', express.static(__dirname)) 
console.log(_path)

// 파일 해석
const storage = multer.diskStorage({
    destination : (req, file, cb) => {cb(null, _path)}, 
    filename : (req, file, cb) => {const fName = Buffer.from(file.originalname, 'latin1').toString('utf-8')//한글깨짐방지
        cb(null, fName)
    }
})

const upload = multer({storage}) // js에서 중괄호 안에 하나만 두는 것은 키와 값이 같다는 것 storage : storage

// 단일 파일
app.post('/up1', upload.single('ufile'),(req,res)=>{
    // console.log(req.files)
    res.send(`<script>alert('단일 파일업로드완료!');location.replace('/')</script>`)

})

// 여러 파일
app.post('/ups', upload.array('mfile'),(req,res)=>{
    // console.log(req.files)
    res.send(`<script>alert('여러 파일업로드완료!');location.replace('/')</script>`)

})


app.listen(port, () => {
    console.log(`http://localhost:${port} 에서 서버시작`)
})
