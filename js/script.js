"use strict";

const title = prompt(
  'Как называется ваш проект?', 
  'Lesson03'
);
const screens = prompt(
  'Какие типы экранов нужно разработать?',
  'Простые, Сложные, Интерактивные'
);
const screenPrice = prompt(
  'Сколько будет стоить данная работа?',
  12000
);
const adaptive = confirm(
  'Нужен ли адаптив на сайте?',
  true
);

/*--------------------------------------*/
const service1 = prompt(
  'Какой дополнительный тип услуги нужен?',
  'service-1'
);
const servicePrice1 = prompt(
  'Сколько это будет стоить?',
  6000
);

/*--------------------------------------*/
const service2 = prompt(
  'Какой дополнительный тип услуги нужен?',
  'service-2'
);
const servicePrice2 = prompt(
  'Сколько это будет стоить?',
  7000
);

/*--------------------------------------*/
const onePrice = 12000;
const secondPrice = 6000;
const thirdPrice = 7000;
const totalCost = onePrice + secondPrice + thirdPrice;

/*--------------------------------------*/
const fullPrice = prompt (
  'Цена',
  totalCost + 300000    // 325000
);

if (fullPrice > 30000) {
  'Даем скидку в 10%';
} else if (30000 > fullPrice > 15000) {
  'Даем скидку в 5%';
} else if (15000 > fullPrice > 0) {
  'Скидка не предусмотрена';
} else if (fullPrice <= -1) {
  'Что-то пошло не так';
}

switch (true) {
  case fullPrice > 30000:
    console.log('Даем скидку в 10%');
    break;
  case 30000 > fullPrice && fullPrice > 15000: 
    console.log('Даем скидку в 5%');
    break;
  case 15000 > fullPrice && fullPrice > 0:
    console.log('Скидка не предусмотрена');
    break;
  case fullPrice <= -1:
    console.log('Что-то пошло не так');
    break;
  default:
    console.log('Не верно ни одно значение');
}

const servicePercentPrice = 325000 - 162500;

/*--------------------------------------*/ 
const rollback = 50;
const layout = "Стоимость верстки экранов" + " " + screenPrice + " " + "рублей/ долларов/гривен/юани";
const development = "Стоимость  разработки сайта" + " " + fullPrice + " " + "рублей/ долларов/гривен/юани";
const percent = "Процент отката посреднику за работу" + " " + fullPrice * (rollback / 100);

/*--------------------------------------*/ 
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);

console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(totalCost);
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(Math.ceil(162500));

console.log(layout);
console.log(development);
console.log(percent);

console.log(screens.length);
console.log(
  screens.toLowerCase().split(", ")
);

