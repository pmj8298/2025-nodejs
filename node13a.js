// 재귀함수
// 1. 기저조건 (Base case)
// 2. 재귀규칙 (Recursive step) 자기를 호출

function countdown(num){
    if (num ===0){ // 기저 조건 : 멈추는 조건
        console.log("종료.")
        return;
    }
    console.log(num)
    countdown(num - 1)
}

countdown(5)
