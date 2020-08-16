let input = prompt(`Пожалуйста, введите целое число`);
let total = 0;
let message = "Было введено не число, попробуйте еще раз";
input = Number(input);
console.log(input);
console.log(typeof input);

if (isNaN(input)) {
  alert(message);
} else {
  while (input !== null) {
    total += Number(input);
    console.log(total);
    input = prompt(`Пожалуйста, введите целое число`);
  }
  alert(`Общая сумма чисел равна ${total}`);
}
