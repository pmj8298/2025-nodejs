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
        const saveDir = path.join(_path,'uploads',folder)
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

/* HTML 트리 생성 , 재귀함수 사용 */
function buildHtmlTree(dir, baseUrl="/uploads"){
    if (!fs.existsSync(dir)) return '' // 기저조건 , 폴더가 더이상 없을 때 종료
    let out = '<ul>'
    // 디렉토리 내부 읽기
    const items = fs.readdirSync(dir,{ withFileTypes: true} )
    items.forEach(item =>{
        const itemPath = path.join(dir, item.name)
        const urlPath = baseUrl + '/' + encodeURIComponent(item.name) // a태그 하이버 링크를 위해서 생성
        if (item.isDirectory()){
            out += `<li><strong>${item.name}</strong>${buildHtmlTree(itemPath, urlPath)}</li>`
        }else{
            out += `<li><a href="${urlPath}" target="_blank">${item.name}</a></li>`
        }
    })
    out += '</ul>'
    return out
}


app.get("/tree",(req,res)=>{
    const root = path.join(__dirname, "uploads")
    if (!fs.existsSync(root))return res.send("<p>Uploads 폴더가 비었습니다.</p>")
    const treeHtml = buildHtmlTree(root)
    res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>파일서버</title>
    <style>
      ul {
        list-style-type: none;
        margin-left: 20px;
      }
      li {
        margin: 3px 0;
      }
      a {
        text-decoration: none;
        color: lightcoral;
      }
      a:hover {
        background-color: lightpink;
      }
    </style>
  </head>
  <body>
  <a href="/">뒤로가기</a>
    <h2>업로드된 파일</h2></body>
</html>${treeHtml}`)
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port} 에서 서버시작`)
})