function solution(n) {
  let answer = 0;
  const a = n.toString();
  for (i = 0; i < a.length; i++) {
    answer += parseInt(a[i]);
  }
  return answer;
}
