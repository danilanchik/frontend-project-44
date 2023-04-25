import runGame from '../index.js';
import getRandomInt from '../utils.js';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator).toString();
  return [question, correctAnswer];
};

const gameDescription = 'What is the result of the expression?';

const runCalcGame = () => {
  runGame(gameDescription, getQuestionAndAnswer);
};

export default runCalcGame;
