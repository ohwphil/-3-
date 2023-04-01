// 난이도 (하)

/*
   승빈이가 시험을 봤습니다. 각 국,수,사,과,영의 점수는 100, 70, 80, 90, 10입니다. 최고점과 최저점을 제외한 나머지 점수의 합을 구하세요.
*/

// 정답
function AddScore(arr) {
  arr.sort((num1, num2) => {
    return num1 - num2;
  });
  arr.shift();
  arr.pop();
  console.log(arr);
  let answer = 0;
  for (const a of arr) {
    answer += a;
  }
  return console.log(answer);
}
let a = [100, 70, 80, 90, 10];
AddScore(a);
