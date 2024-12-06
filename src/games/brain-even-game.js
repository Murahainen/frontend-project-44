import readlineSync from 'readline-sync';
import { getRandomInt, askQuestion, checkAnswerString } from '../index.js';

// Функция для проверки чётности числа
const isEven = (number) => number % 2 === 0;

export const runBrainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const rounds = 3;

  for (let round = 1; round <= rounds; round += 1) {
    const number = getRandomInt(1, 100); // Генерация случайного числа
    const correctAnswer = isEven(number) ? 'yes' : 'no'; // Проверка, простое ли число

    console.log(`Question: ${number}`);
    const userAnswer = askQuestion("Your answer: ").trim().toLowerCase();
    
    if (!checkAnswerString(correctAnswer, userAnswer, name)) {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
