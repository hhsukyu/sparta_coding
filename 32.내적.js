function solution(a, b) {
  let answer = 0;
  for (n = 0; n < a.length; n++) {
    answer += a[n] * b[n];
  }
  return answer;
}
