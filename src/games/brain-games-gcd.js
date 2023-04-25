import runGame from '../index.js';
import getRandomInt from '../utils.js';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const generateGameData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = findGcd(num1, num2).toString();
  return [question, correctAnswer];
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => runGame(gameDescription, generateGameData);

export default runGcdGame;
