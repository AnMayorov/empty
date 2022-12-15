"use strict";

setTimeout(makeUpUser, 5000);
function makeUpUser() {
  alert ('Are you going to stare at this boring page forever?');
};

let price = 28.99;
let discount = 10;
let total = price - (price * (discount / 100));
function freeShipping() {
  if (total > 25) {
    alert('Smile!');
  };
}
freeShipping();

let count = 10;
while (count > 0) {
  count = count -1;
}
console.log(count);

let dog = {name: 'Rover', weight: '35'};
if (dog.weight > 30) {
  alert('WOOF! WOOF!');
} else {
  alert('woof! woof!');
};
















// rollBack = 50;
/*--------------------------------------*/
// const title = prompt(
//   'Как называется ваш проект?', 
//   'Калькулятор вёрстки'
// );
// const screens = prompt(
//   'Какие типы экранов нужно разработать?',
//   'Простые, Сложные, Интерактивные'
// );
// const screenPrice = +prompt(
//   'Сколько будет стоить данная работа?',
//   12000
// );
// const adaptive = confirm(
//   'Нужен ли адаптив на сайте?'
// );
// /*--------------------------------------*/
// const service1 = prompt(
//   'Какой дополнительный тип услуги нужен?',
//   'service-1'
// );
// const servicePrice1 = +prompt('Сколько это будет стоить?');
// /*--------------------------------------*/
// const service2 = prompt(
//   'Какой дополнительный тип услуги нужен?',
//   'service-2'
// );
// const servicePrice2 = +prompt('Сколько это будет стоить?');
// /*--------------------------------------*/
// let allServicePrices, diffPercent;
// const fullPrice = screenPrice + servicePrice1 + servicePrice2;
// const layout = "Стоимость верстки экранов" + " " + screenPrice + " " + "рублей";
// const development = "Стоимость  разработки сайта" + " " + fullPrice + " " + "рублей";
// const percent = fullPrice * (rollback / 100);
/*--------------------------------------*/
// let getAllServicePrices = function(servicePrice1, servicePrice2) {
//   return servicePrice1 + servicePrice2;
// };
// allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);



// let getServicePercentPrices = function(fullPrice, percent) {
//   return fullPrice - percent;
// };
// diffPercent = getServicePercentPrices(fullPrice, percent);
// /*--------------------------------------*/
// const servicePercentPrice = Math.ceil(fullPrice - percent) + diffPercent;

// const showTypeof = function(variable) {
//   console.log(variable, typeof variable);
// };

// const getRollbackMessage = function(price) {
//   if (price > 30000) {
//     return 'Даем скидку в 10%';
//   } else if (price >= 15000) {
//     return 'Даем скидку в 5%';
//   } else if (price >= 0) {
//     return 'Скидка не предусмотрена';
//   } else {
//     return 'Что-то пошло не так';
//   }
// };
/*--------------------------------------*/
// showTypeof(title);
// showTypeof(fullPrice);
// showTypeof(adaptive);

// console.log(
//   screens.toLowerCase().split(", ")
// );
// console.log(getRollbackMessage(fullPrice));
// console.log(diffPercent);

// console.log(typeof title);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);

// console.log(title);

// console.log(screenPrice);
// console.log(adaptive);

// console.log(screens.length);


// console.log(development);
// console.log(layout);
// console.log(percent);
// console.log(servicePercentPrice);
// console.log(allServicePrices);



// function getAllServicePrices() {
//   function step(index, str) { // Параметр, переменная
//     console.log(index + ' ' + str);
//   }
  
//   step(1, 'Испачкать');
//   step(2, 'Пойти в ванную');
//   step(3, 'Помыть');
// }
// getAllServicePrices()

// type function expression:
// const getAllServicePrices = function() { 
//   const step = function(index, str) { // Параметр, переменная
//       console.log(index + ' ' + str);
//     }
    
//     step(1, 'Испачкать');
//     step(2, 'Пойти в ванную');
//     step(3, 'Помыть');
// }
// getAllServicePrices();

// const getFullPrice = function(a, b) { 
//   let res = a +b; // Переменная не видна за пределами функции
//   console.log(a + b);
//   }
//   console.log(res);  
//   getFullPrice(3, 5);


// let res // объявляем до начала функции
// const getFullPrice = function(a, b) { 
//    res = a +b; // Переопределяем внутри функции
// }
// getFullPrice(3, 5);
// console.log(res); // Выводим значение в консоль ПОСЛЕ функции, ДО - ошибка

// let res // объявляем до начала функции
// const getFullPrice = function(a, b) { 
//    return a +b; // НЕ переопределяем внутри функции, а ВОЗВРАЩАЕМ рез-т
//    console.log(res); // ВСЁ что после return(останавливает работу программы) не будет отработано
// }
// res = getFullPrice(3, 5); // можно сразу назначить как значение переменной
// console.log(res);

// СОКР. запись: 
// let res // объявляем до начала функции
// const getFullPrice = function(a, b) { 
//    return a +b; // НЕ переопределяем внутри функции, а ВОЗВРАЩАЕМ рез-т
// }
// console.log(getFullPrice(3, 5)); // Избавляемся от перемю res, выводим рез. сразу в консоль
// Кол-во передаваемых аргументов (3, 5 и т.д.) не ограничено

/*
let res // объявляем до начала функции
  const getFullPrice = function(a, b) { 
    console.log(arguments[]);  Псевдомассив (arguments[индекс]) - могут спросить на собеседовании
}
console.log(getFullPrice(3, 5));

ЧИСТЫЕ ФУНКЦИИ(рез. выполнения зависит т-ко от входных параметров - всегда являются "детерминированными"):
let count = 12
const getFullPrice = function(a, b) { 
  return a + b + count; // НЕ переопределяем внутри функции, а ВОЗВРАЩАЕМ рез-т
}
console.log(getFullPrice(3, 10));
Не является чистой, т. к. при изменении переменой (count) изменится рез. функции
В чистой функции не дожно быть побочных эффектов, напр. console.log()

Анонимные функции и callback -и:
const getFullPrice = function(a, b, callback) { Определяется ещё один параметр - callback
  return a + callback(b); параметр b попадает в параметр num, увеличивается на 2 и возвр. в виде рез-та выполнения функции
}
const secondFunc = function(num) {  Передаётся в виде "аргумента"(callback) в getFullPrice
  return num + 2; 
}
console.log(getFullPrice(3, 10, secondFunc)); Передаём три аргумента, где 3 = a, 10 = b и secondFunc = callback = 2

Анонимные(исп. один раз, можно без переменных и лишних имён):
function one () {
  console.log('one');
}
const two = function() {  Функция без имени, можно задать, напр: function second()
  console.log('two');
}
console.log('one');
console.log('two');ные:

ПРИМЕР:
const getFullPrice = function(a, b, callback) { 
  return a + callback(b); 
}

console.log(getFullPrice(3, 10, function(num) {   Передаём функцию без исп. переменной const
  return num + 2; 
}));


const money = 5000;
const expenses1 = 200;
const expenses2 = 300;

const sumExpensis = function(exp1, exp2) {
  return exp1 + exp2;
}

const countTotal = function() {
  return money - expenses1 - expenses2;
}

console.log(countTotal());
console.log(sumExpensis(expenses1, expenses2)); Можем подставить эту функцию вмемто вместо переменных (expenses1) и (expenses2)

ПРИМ:
const money = 5000;
const expenses1 = 200;
const expenses2 = 300;

const sumExpensis = function(exp1, exp2) {
  return exp1 + exp2;
}

const countTotal = function() {
  return money - sumExpensis(expenses1, expenses2);
}

console.log(countTotal());

const money = 5000;
const expenses1 = 200;
const expenses2 = 300;

const sumExpensis = function(exp1, exp2) {
  return exp1 + exp2;
}

const countTotal = function() {
  return money - sumExpensis(expenses1, expenses2); Вычитаем из (money) рез-т выполнения функции
}

console.log(countTotal());


const money = 5000;
const expenses1 = 200;
const expenses2 = 300;

const sumExpensis = function(exp1, exp2) {
  return exp1 + exp2;
}

const countTotal = function(count, call) {  Можем передать (money) в виде параметра в функцию как и вызов функции в виде (callback)
  return count - call(expenses1, expenses2); 
}

console.log(countTotal(money, sumExpensis));


const money = 5000;
const expenses1 = 200;
const expenses2 = 300;

const sumExpensis = function(exp1, exp2) {
  return exp1 + exp2;
}

const countTotal = function(count, call) {  Можем передать (money) в виде параметра в функцию как и вызов функции в виде (callback)
  return count - call(expenses1, expenses2); 
}

console.log(countTotal(money, function(exp1, exp2) { Можем заменить передачу callback в виде переменной на анонимную функцию
  return exp1 + exp2;
}));


const sendServer = function() { 
  setTimeout(function() { Метод, который затормаживает переданный в него код, в дан. сл. на (2000ms)
    console.log('Вызов прошёл');
  }, 2000); 
}

const someFunk = function() {
  console.log('Отработала вторая функция');
}

sendServer();
someFunk();


const sendServer = function(call) { 
  setTimeout(function() { 
    console.log('Вызов прошёл');
    call();        При помощи callback функции отработают в нужной послеловательности
  }, 2000); 
}

const someFunk = function() {
  console.log('Отработала вторая функция');
}

sendServer(someFunk);
*/