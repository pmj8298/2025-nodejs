const fs = require('fs')
const path = require('path')
console.log(__dirname)

const filename = path.join(__dirname, "node01.js")
fs.stat(filename, (e,d) => {
    console.log(d.mtime)       // 마지막으로 수정된 시간 출력
    console.log(d.ctime)       // 상태가 변경된 시간 출력 (권한 변경 등)
    console.log(d.atime)       // 마지막으로 접근한 시간 출력
    console.log(d.birthtime)   // 파일이 생성된 시간 출력
    console.log(d.size)        // 파일 크기 출력 (바이트 단위)
    console.log(d.isFile())    // 파일인지 여부 출력 (true 또는 false)
    console.log(d.isDirectory()) // 디렉토리인지 여부 출력 (true 또는 false)

})