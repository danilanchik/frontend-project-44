const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

export const generateGameData = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(1, 10);
  const length = getRandomInt(5, 10);
  const progression = generateProgression(start, step, length);
  const hiddenElementIndex = getRandomInt(0, length - 1);
  const correctAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export const gameDescription = 'What number is missing in the progression?';
