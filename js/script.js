"use strict";

const rollback = 50;
/*--------------------------------------*/
const title = prompt(
  'Как называется ваш проект?', 
  'Lesson04'
);
const screens = prompt(
  'Какие типы экранов нужно разработать?',
  'Простые, Сложные, Интерактивные'
);
const screenPrice = +prompt(
  'Сколько будет стоить данная работа?',
  12000
);
const adaptive = confirm(
  'Нужен ли адаптив на сайте?'
);
/*--------------------------------------*/
const service1 = prompt(
  'Какой дополнительный тип услуги нужен?',
  'service-1'
);
const servicePrice1 = +prompt('Сколько это будет стоить?');
/*--------------------------------------*/
const service2 = prompt(
  'Какой дополнительный тип услуги нужен?',
  'service-2'
);
const servicePrice2 = +prompt('Сколько это будет стоить?');
/*--------------------------------------*/
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const layout = "Стоимость верстки экранов" + " " + screenPrice + " " + "рублей";
const development = "Стоимость  разработки сайта" + " " + fullPrice + " " + "рублей";
const percent = fullPrice * (rollback / 100);
const servicePercentPrice = Math.ceil(fullPrice - percent);

if (fullPrice > 30000) {
  console.log('Даем скидку в 10%');
} else if ( fullPrice >= 15000 && fullPrice < 30000) { 
  console.log('Даем скидку в 5%');
} else if (fullPrice >= 0 && fullPrice < 15000) {
  console.log('Скидка не предусмотрена');
} else {
  console.log('Что-то пошло не так');
}
/*--------------------------------------*/ 
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);

console.log(screens.length);
console.log(
  screens.toLowerCase().split(", ")
);

console.log(development);
console.log(layout);
console.log(percent);
console.log(servicePercentPrice);