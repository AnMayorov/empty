let name;
let weight;

// function bark() - функция, где bark - имя функции,  
function bark(name, weight) { // name, weight - параметры функции, значения которым присваиваются в момент её вызова
  if (weight > 20) {
    console.log(name + " says WOOF WOOF!");
  } else {                                   // всё что находится внутри {} - это "тело" функции
    console.log(name + " says woof woof!");
  }
}
// вызов функции:
bark("Rover, 23"); // "Rover, 23" - аргументы функции - значеня, которые передаются функции при её вызове 
bark("Spot, 13");  // "Spot, 13" - аргументы функции - значеня, которые передаются функции при её вызове 
bark("Spike, 53"); // "Spike, 53" - аргументы функции - значеня, которые передаются функции при её вызове 
bark("Lady, 17");  // "Lady, 17" - аргументы функции - значеня, которые передаются функции при её вызове 
/* 
При вызове функции bark аргументы связываются с именами параметров,
каждый раз, когда имена параметров встречаются в функции, они заменяются 
переданными значениями:"Rover" - name(имя), 23 - weight(вес).
После того как значения аргументов будут связаны с именами параметров,
начинается выполнение команд в теле функции, где параметры начинают работать 
как переменные, которым "присвоены" значения аргументов:
  function bark(name, weight) { 
  if (weight(23кг) > 20) { // если вес собаки больше 20...
    console.log(name("Rover") + " says WOOF WOOF!"); // то он скажет "ГАВ, ГАВ!",
  } else {                    
    console.log(name("Rover") + " says woof woof!"); // в противном случае(если вес меньше) - он скажет "гав гав!"
  }
}
*/

let temp;

function whatShallWear (temp) {
  if (temp < 60) {
    console.log("Wear a jacket");
  } else if (temp < 70) {
    console.log("Wear a sweater");
  } else {
    console.log("Wear a t-shirt");
  }
}
whatShallWear(50);
whatShallWear(60);
whatShallWear(80);


let test = 1;
function dolt(param) {
  param = 2;
}
dolt(test);
console.log(test); // 1

// Эксперименты:
function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}
makeTea(3); // cups = 3, tea = undefined - т. к. данный параметр не получил аргумент

function makeTea(cups, tea) {
  console.log("Brewing " + cups + " cups of " + tea);
}
makeTea(3, "Earl Gray", "hey ma!", 42); // cups = 3, tea = "Earl Gray", остальные аргументы - лишние, они игнорируются

function barkAtTheMoon() {
  console.log("Woooooooo!");
}
barkAtTheMoon(); // При вызове функция всё равно будет работать, даже если аргументы не указаны

/*
Функция нажатия кнопок на hh.ru: 

(() => {
  let delay = 0;
  const jobs = document.querySelectorAll();
  jobs.forEach(job => {
    setTimeout(() => {
      job.click();
    }, delay);
    delay += 2000;
  });
})();
*/
