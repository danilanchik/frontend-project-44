const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const isEven = (num) => num % 2 === 0;

export const generateGameData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
