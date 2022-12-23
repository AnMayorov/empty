// переменные для хранения текущей позиции(клетки) корабля
// let location1 = 3;
// let location2 = 4; // заменяем переменные на переменные с генератором случайных чисел (Math.random())...
// let location3 = 5; // и последующим округлением до целого числа при помощи (Math.floor())

// Math.random(генерирует числа от 0 до 1 случайным образом, не включая 1) * 5 = 4.999
let randomLoc = Math.floor(Math.random() * 5); // Math.floor округляет полученное дробное число до 4, отсекая 999
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

// переменные для действий пользователя
let guess; // выстрел
let guesses = 0; // кол-во выстрелов, которое может сделать игрок
let hits = 0; // кол-во попаданий 

let isSunk = false; // будет сообщать потоплен корабль или нет

while (isSunk == false) { // пока корабль не потоплен...
  guess = prompt("Ready, aim, fire! (enter a number 0 - 6) :"); // выводить на экран это сообщение(указать координаты выстрела)
  if (guess < 0 || guess >6) { // проверяем на кол-во попаданий в диапазоне от 0 до 6, если меньше или больше(не коррктно), то... 
    alert ("Please enter a valid cell number!"); // вывести это сообщение
  } else { // в противном случае, если корректно...
    guesses = guesses + 1; // увеличиваем значение guesses на 1, т. е. добавляем кол-во выстрелов (+1)

    // если выстрел игрока попадает в одну из локаций(клеток) - то...
    if (guess == location1 || guess == location2 || guess == location3) {
      alert ("HIT!"); // сообщаем игроку, что он попал...
      hits = hits + 1; // и увеличиваем знчение hits(кол-во попаданий) на 1
      
      if (hits == 3) { // если есть 3 попадания, то...
        isSunk = true; // присвоить isSunk значение "истинно"...
        alert ("You sank my battleship!"); // и вывести сообщение "Корабль потоплен!"
      } 
    } else { // в противном случае, если попаданий нет...
        alert("MISS"); // сообщаем, что игрок промахнулся
    }
  }
}

// вывести сообщение для игрока
let stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);