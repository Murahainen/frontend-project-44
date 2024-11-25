import { getRandomInt, askQuestion, checkAnswer } from '../src/index.js';

export const runBrainProgressionGame = () => {
  const name = askQuestion("Welcome to the Brain Games!\nMay I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("What number is missing in the progression?");
  
  const rounds = 3;  

  for (let round = 1; round <= rounds; round++) {
    const { progression, hiddenNumber } = generateProgression();
    
    // Вопрос пользователю
    console.log(`Question: ${progression}`);
    const userAnswer = askQuestion("Your answer: ");
    
    if (!checkAnswer(hiddenNumber, userAnswer, name)) {
      return;   
    }
  }

  console.log(`Congratulations, ${name}!`);  
};   

// Функция для генерации арифметической прогрессии
export const generateProgression = () => {
  const length = getRandomInt(5, 10);  
  const start = getRandomInt(1, 100);  
  const step = getRandomInt(1, 10);  

  // Создаем прогрессию
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + step * i);
  }

  // Выбираем случайный индекс для скрытого числа
  const hiddenIndex = getRandomInt(0, length - 1);
  const hiddenNumber = progression[hiddenIndex];

  // Заменяем скрытое число на ".."
  progression[hiddenIndex] = '..';

  return {
    progression: progression.join(' '), // Сериализуем прогрессию в строку (преобразуем массив в строку для пользователя)
    hiddenNumber, // Скрытое число
  };
};