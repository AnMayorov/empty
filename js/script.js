// Перебор элементов массива с циклом while:
let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 
              34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

// переменная для выводимой строки:              
let output;

// переменная для хранения текущего индекса:
// let i = 0;

// переменная для хранения максималного результата:
let highScore = 0;

// пока индекс меньше длины массива, цикл продолжается:
// while (i < scores.length) {
  // выходная строка с номером раствора:
  // output = "Bubble solution #" + i + " score: " + scores[i];
  // console.log(output);

  // индекс увеличивается на один перед повторным прохождением цикла:
  // i = i + 1;
//}

// то же самое с циклом for:
// инициализация -     условие -   увеличение i = i + 1:
// for (let i = 0; i < scores.length; i++) {
//   output = "Bubble solution #" + i + " score: " + scores[i];
//   console.log(output);
// }

for (let i = 0; i < scores.length; i++) {
  output = "Bubble solution #" + i + " score: " + scores[i];
  console.log(output);
  if (scores[i] > highScore) {
    highScore = scores[i];
  }
}
console.log("Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highScore);