const fs = require('fs')
const path = require('path')
console.log(__dirname)

const filename = path.join(__dirname, "node01.js")
fs.stat(filename, (e,d) => {
    console.log(d.mtime)
    console.log(d.ctime)
    console.log(d.atime)
    console.log(d.birthtime)
})