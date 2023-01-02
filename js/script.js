let products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
let last = products[3];
console.log(last);

// Генератор красивых фраз
// определяем функцию makePhrases:
function makePhrases() {
  // создаём три массива со словами, которые будут исползоваться при построении фраз

  // переменная words1 для первого массива, в него помещается 5 строк, которые можно менять другими словами
  let words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"]; 

  // ещё два массива со словами:
  let words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
  let words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

  /*
  Программа генерирует 3 случайных числа - по одному для каждого из 3-х случайных
  слов, выбираемых для фразы - Math.random() генерирует число от 0 до 1 - не
  включая 1. Если умножить сгенерированное число на границу массива и отсечь 
  дробную часть(Math.floor()), мы получим число в диапазоне от 0 до длины 
  массива, уменьшенной на 1.  
  */
  // rand1 - число от 0 до последнего индекса массива words1
  let rand1 = Math.floor(Math.random() * words1.length);
  let rand2 = Math.floor(Math.random() * words2.length);
  let rand3 = Math.floor(Math.random() * words3.length);

  /*
  Переменная phrase - для хранения сгенерированной фразы, для индексирования
  массивов слов исползуются случайные числа(rand1, rand2, rand3).
  Берём случайно выбранные слова и склеиваем их, разделяя пробелами.
  */
  let phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
  alert(phrase); // выводим фразу
}

// makePhrases вызывается один раз, но если потребуется, можно вызвать многократно 
makePhrases();

// цикл while для proDucts:
let proDucts = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
let hasBubbleGum = [false, false, false, true];
let i = 0;
while (i < hasBubbleGum.length) {
  if (hasBubbleGum[i]) {
    console.log(proDucts[i] + " contains bubble gum");
  }
  i = i + 1;
}