import { getRandomInt, askQuestion, checkAnswer, gcd } from '../src/index.js';

const runBrainGcdGame = () => {
  const name = askQuestion("Welcome to the Brain Games!\nMay I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  
  const rounds = 3;  

  for (let round = 1; round <= rounds; round = round + 1) {
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 50);
    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2); // вычисляем НОД

    console.log(`Question: ${question}`);
    const userAnswer = askQuestion('Your answer: ');

    if (!checkAnswer(correctAnswer, userAnswer, name)) {
      return;  
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runBrainGcdGame;