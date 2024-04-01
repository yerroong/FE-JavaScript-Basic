/* 3번 문제 답안을 작성해주세요. */
function solution(arr) {
    let n = arr.length;
    let k=0;
    if (n<=1){
        return [-1];
    }
    else{ 
        for(let i = 0; i<n; i++){
            if(arr[i]<arr[k]){
                k = i;   
            } 
        }

        let removed = arr.splice(k, 1);
        return arr;
    }
}