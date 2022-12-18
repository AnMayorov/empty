// "Серьёзное" приложение:
let word = 'bottles';
let count = 99;
let animal = "of bear,";
let string = "Take one down, pass it around,";

while (count > 0) {
  console.log(count + " " + word + " " + animal + "on the wall");
  console.log(count + " " + word + " " + animal);
  console.log(string);
  count = count - 1;

  if (count > 0) {
    console.log(count + " " + word + " " + animal + "on the wall");
  } else {
    console.log("No more" + " " + word + " " + animal + "on the wall");
  }
}
