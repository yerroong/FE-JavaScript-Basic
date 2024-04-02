/* 1번 문제 답안을 작성해주세요. */
// function solution(num1, num2) {
//   var answer = num1 * num2;
//   return answer;
// }

//map을 활용한 코드
function solution(num1, num2) {
  return [num1, num2].map(x => x * num2)[0];
}