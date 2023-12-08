function solution(s) {
  if (s.length % 2 === 0) {
    return s.slice(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    const num = Math.floor(s.length / 2);
    return s.slice(num, num + 1);
  }
}
