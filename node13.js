const express = require("express")
const path = require("path")
const fs = require("fs")
const multer = require("multer")

const app = express()
const port = 3003
const _path = __dirname

app.use('/', express.static(__dirname))
console.log(_path)

// 업로드 폴더를 지정
const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        const ext = path.extname(file.originalname)
        const folder = ext ? ext.slice(1) : 'etc' // ext.slice(1) 파일확장자에서 점을 제외 , 파일 확장자가 없으면 etc 폴더에 저장.
        const saveDir = path.join(_path,'upload',folder)
        fs.mkdirSync(saveDir,{recursive:true}) // 동기식으로 동작,  폴더가 없으면 생성
        cb(null, saveDir)
    },
    filename:(req, file, cb)=>{
        const fName = Buffer.from(file.originalname, 'latin1').toString('utf-8') // 한글깨짐방지
        cb(null, fName)
    }
})
const upload = multer({ storage })

// 단일 파일
app.post('/up1', upload.single('ufile'),(req,res)=>{
    res.send(`<script>alert("단일 파일 업로드완료");location.replace('/')</script>`)
})

// 여러 파일
app.post('/ups', upload.array('mfile'),(req,res)=>{
    res.send(`<script>alert("파일 여러개 업로드 완료");location.replace('/')</script>`)
})


app.listen(port, ()=>{
    console.log(`http://localhost:${port} 에서 서버시작`)
})