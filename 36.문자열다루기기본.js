function solution(s) {
  let answer = parseInt(s);
  if (s.length === 4 || s.length === 6) {
    if (s.includes("e") || answer !== Number(s)) {
      return false;
    } else return true;
  } else return false;
}
