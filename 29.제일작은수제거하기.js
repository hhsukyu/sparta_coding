function solution(arr) {
  if (arr.length > 1) {
    const MinNum = Math.min(...arr);
    return arr.filter((number) => number !== MinNum);
  } else {
    return [-1];
  }
}
