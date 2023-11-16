function solution(x, n) {
  const answer = [];
  for (i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
