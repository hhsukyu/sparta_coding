function solution(num1, num2) {
  const a = (num1 / num2) * 1000;
  const answer = Math.trunc(a);
  return answer;
}
