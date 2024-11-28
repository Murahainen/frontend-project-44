import { getRandomInt, askQuestion, checkAnswer } from '../src/index.js';

const runBrainCalcGame = () => {
  const name = askQuestion("Welcome to the Brain Games!\nMay I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("What is the result of the expression?");

  const operations = ['+', '-', '*'];
  
  const rounds = 3; // Количество раундов

  for (let round = 1; round <= rounds; round = round + 1) {
    const num1 = getRandomInt(1, 50);
    const num2 = getRandomInt(1, 50);
    const operation = operations[getRandomInt(0, operations.length - 1)];
    const question = `${num1} ${operation} ${num2}`;

    let correctAnswer;
    switch (operation) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        console.log('Invalid operation');
    }

    console.log(`Question: ${question}`);
    const userAnswer = askQuestion("Your answer: ");

    // Проверяем ответ с использованием функции checkAnswer
    if (!checkAnswer(correctAnswer, userAnswer, name)) {
      return; // Если ответ неверный, завершаем игру
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runBrainCalcGame;
