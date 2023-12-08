function solution(numbers) {
  let answer = 0;
  for (i = 1; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}
