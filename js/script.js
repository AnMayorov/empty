// Пошаговое выполнение функции с командой (return):
// ШАГ 1: объявляем переменную radius, присваиваем значение 5.2
let radius = 5.2;
// ШАГ 2: объявляем переменную theArea
let theArea = calculateArea(radius); // ШАГ 3: присваиваем  theArea значение вызываемой функции, содержащей переменную radius как аргумент
// ШАГ 4: пищем функцию calculateArea с параметром (r), которому передаётся аргумент radius:
function calculateArea(r) {
  let area; // ШАГ 5: с объявления переменной area начинается выполнение функции
  if (r <= 0) { // Если r <= 0, то функция вернёт 0 и перестанет выполняться 
    return 0;
  } else { // ШАГ 6: выполняется else, т. к. r = 5.2 в нашем случае
    // ШАГ 7: программа вычисляет площадь круга, используя значение 5.2 параметра r
    area = Math.PI * r * r;
    // ШАГ 8: функция возвращает вычисленное значение, которое сохранится в переменной theArea
    return area;
  }
}
// Вывод в консоль: 84.94866535306801
console.log("The area is: " + theArea);
// Функция без команды return вернёт undefined.

// расчёт фрактала:
function clunk(times) {
  let num = times;
  while (num > 0) {
    display("clunk");
    num = num - 1;
  }
}
function thingamajig(size) {
  let facky = 1;
  clunkCounter = 0;
  if (size == 0) {
    display("clunk");
  } else if (size == 1) {
    display("thunk");
  } else {
    while (size > 1) {
      facky = facky * size;
      size = size - 1;
    }
    clunk(facky);
  }
}
function display(output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;
}
let clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);

let balance = 10500; // глобальная перемнная...
let cameraOn = true;
let amount = steal(balance, 1250); // но здесь она заменяется параметром 

function steal(balance, amount) {
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount; // попытка изменить переменную неудачна, т. к. она заменена параметром
  }
  return amount; // возврат украденной суммы, прекращение выполнения функции
  cameraOn = true; // строки кода после return игнорируются
}

alert("Criminal: you stole " + amount + "!");