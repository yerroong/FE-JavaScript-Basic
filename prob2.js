/* 2번 문제 답안을 작성해주세요. */
function solution(n) {
    let A = 1;
    for(let i= 1; i<11; i++){
        A *= i
        if(n < A){
            return i-1;
        }
        else if(n===A){
            return i;
        }
    } 
}