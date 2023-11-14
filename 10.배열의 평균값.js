function solution(numbers) {
  const initialValue = 0;
  const add = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  const answer = add / numbers.length;
  return answer;
}
