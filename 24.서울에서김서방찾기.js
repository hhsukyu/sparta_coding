function solution(seoul) {
  const answer = seoul.findIndex(name => name === 'Kim');
  return `김서방은 ${answer}에 있다`;
}
