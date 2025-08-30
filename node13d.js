// 재귀함수
// 1. 기저조건 (Base case)
// 2. 재귀규칙 (Recursive step) 자기를 호출

function tree(dir , depth = 0 ){
    if (dir === 0){ // 기저 조건 : 멈추는 조건
        return
    }    
    console.log(' '.repeat(depth* 2)+ `폴더${dir}`)
    tree(dir - 1, depth + 1)
    tree(dir - 1, depth + 1)
}

tree(5)