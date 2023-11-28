function solution(n) {
  const sort = n
    .toString()
    .split('')
    .sort((a, b) => b - a);
  const answer = Number(sort.join(''));
  return answer;
}
