// 재귀함수
// 1. 기저조건 (Base case)
// 2. 재귀규칙 (Recursive step) 자기를 호출

function comb(num , cc){
    if (cc === 0){ // 기저 조건 : 멈추는 조건
        return 1
    }    
    return num * comb(num - 1, cc - 1)
}

const result = comb(45, 6)
console.log(result)
