const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

export const generateGameData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = findGcd(num1, num2).toString();
  return [question, correctAnswer];
};

export const gameDescription = 'Find the greatest common divisor of given numbers.';
