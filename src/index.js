import readlineSync from 'readline-sync';

// Функция для генерации случайного числа в диапазоне
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция для запроса у пользователя
export const askQuestion = (question) => readlineSync.question(question);

// Функция для проверки ответа
export const checkAnswer = (correctAnswer, userAnswer, name) => {
  if (parseInt(userAnswer, 10) === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export const checkAnswerString = (correctAnswer, userAnswer, name) => {
  // Прямое сравнение строк
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

// Функция для вычисления НОД
export function gcd(a, b) {
  let x = a;
  let y = b;

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
}

// Функция для запуска игры
export const startGame = (game) => {
  game();
};
