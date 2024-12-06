import { getRandomInt, askQuestion, checkAnswerString } from '../index.js';

// Проверка на простое число
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const runBrainPrimeGame = () => {
  const name = askQuestion('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  
  const rounds = 3; // Количество раундов

  for (let round = 1; round <= rounds; round = round + 1) {
    const question = getRandomInt(1, 100); // Генерация случайного числа
    const correctAnswer = isPrime(question) ? 'yes' : 'no'; // Проверка, простое ли число

    console.log(`Question: ${question}`);
    const userAnswer = askQuestion('Your answer: ').trim().toLowerCase();
    
    if (!checkAnswerString(correctAnswer, userAnswer, name)) {
      return; // Проверка и завершение игры
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runBrainPrimeGame;
