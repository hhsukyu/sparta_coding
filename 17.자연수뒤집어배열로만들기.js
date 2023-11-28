function solution(n) {
  const answer = [];
  const str = n.toString().split('');
  for (let i = str.length - 1; i >= 0; i--) {
    const num = parseInt(str[i]);
    answer.push(num);
  }
  return answer;
}
