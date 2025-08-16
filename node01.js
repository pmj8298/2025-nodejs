console.log('서버 처음 시작');

// 웹브라우저 기능인 alert 사용못함
// alert('반가워요');

const {createServer} = require('http');

// const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => { // req, res : 요청과 응답
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

// server를 인스턴스화 시켜서 감시
// server.listen(port, hostname, () => {
server.listen(port, () => {
    console.log('서버가 동작하였습니다');
});