// Iteration 2: Generating random numbers and displaying them
let generatedNumber1 = Math.round(Math.random() * 100);
const firstNumberDisplay = document.getElementById("number1");

let generatedNumber2 = Math.round(Math.random() * 100);
const secondNumberDisplay = document.getElementById("number2");

// Iteration 3: Variables for game functionality
let chosenOperator;
let currentScore = 0;
const additionButton = document.getElementById("plus");
const subtractionButton = document.getElementById("minus");
const multiplicationButton = document.getElementById("mul");
const divisionButton = document.getElementById("divide");
const modulusButton = document.getElementById("modulus");

// Iteration 4: Variables for the third number and its display
let answerDisplay = document.getElementById("number3");
let correctAnswer;

// Iteration 5: Function to generate new numbers and problem
function generateNewProblem() {
  generatedNumber1 = Math.round(Math.random() * 100);
  generatedNumber2 = Math.round(Math.random() * 100);

  if (generatedNumber1 < generatedNumber2) {
    // Ensure generatedNumber1 is always larger

    [generatedNumber1, generatedNumber2] = [generatedNumber2, generatedNumber1];
  }

  chosenOperator = Math.round(Math.random() * 5);
  switch (chosenOperator) {
    case 1:
      correctAnswer = generatedNumber1 + generatedNumber2;
      break;

    case 2:
      correctAnswer = generatedNumber1 - generatedNumber2;
      break;

    case 3:
      correctAnswer = generatedNumber1 * generatedNumber2;
      break;

    case 4:
      correctAnswer = Math.floor(generatedNumber1 / generatedNumber2);
      break;

    case 5:
      correctAnswer = generatedNumber1 % generatedNumber2;
      break;

    default:
      correctAnswer = generatedNumber1 + generatedNumber2;
  }

  firstNumberDisplay.innerHTML = generatedNumber1;
  secondNumberDisplay.innerHTML = generatedNumber2;
  answerDisplay.innerHTML = correctAnswer;

  console.log(generatedNumber1, generatedNumber2, correctAnswer, chosenOperator);
}

generateNewProblem();

// Iteration 6: Handling button clicks for operations
additionButton.onclick = () => {
  if (generatedNumber1 + generatedNumber2 === correctAnswer) {
    currentScore++;
    generateNewProblem();
    resetTime(timerId);
  } else {
    // Handle incorrect answer
    location.href = "./gameover.html?score=" + currentScore;
  }
};

multiplicationButton.onclick = () => {
  if (generatedNumber1 * generatedNumber2 === correctAnswer) {
    currentScore++;
    generateNewProblem();
    resetTime(timerId);
  } else {
    // Handle incorrect answer
    location.href = "./gameover.html?score=" + currentScore;
  }
};

divisionButton.onclick = () => {
  if (Math.floor(generatedNumber1 / generatedNumber2) === correctAnswer) {
    currentScore++;
    generateNewProblem();
    resetTime(timerId);
  } else {
    // Handle incorrect answer
    location.href = "./gameover.html?score=" + currentScore;
  }
};

modulusButton.onclick = () => {
  if (generatedNumber1 % generatedNumber2 === correctAnswer) {
    currentScore++;
    generateNewProblem();
    resetTime(timerId);
  } else {
    // Handle incorrect answer
    location.href = "./gameover.html?score=" + currentScore;
  }
};


subtractionButton.onclick = () => {
  if (generatedNumber1 - generatedNumber2 === correctAnswer) {
    currentScore++;
    generateNewProblem();
    resetTime(timerId);
  } else {
    // Handle incorrect answer
    location.href = "./gameover.html?score=" + currentScore;
  }
};

// Iteration 7: Timer functionality
const initialTime = 20; 
let remainingTime = initialTime; 
let timerId;

// Iteration 7: Making Timer functional
function startTimer() {
  remainingTime = initialTime;
  timerId = setInterval(() => {
    remainingTime--;
    if (remainingTime == 0) location.href = "./gameover.html?score=" + currentScore;
    timer.innerHTML = remainingTime;
  }, 1000);
}

function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}

startTimer();

