const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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

export const generateGameData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator).toString();
  return [question, correctAnswer];
};

export const gameDescription = 'What is the result of the expression?';
