const title = "Lesson02";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice =5000;
const rollback = 50;
const fullPrice = 300000;
const adaptive = true;

const layout = "Стоимость верстки экранов" + " " + screenPrice + " " + "рублей/ долларов/гривен/юани";
const development = "Стоимость  разработки сайта" + " " + fullPrice + " " + "рублей/ долларов/гривен/юани";

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(screens.toLowerCase());
console.log(screens.split(", "));

console.log(layout);
console.log(development);

console.log(fullPrice * (rollback / 100));

