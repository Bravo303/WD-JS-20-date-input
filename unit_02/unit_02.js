// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a = 7;
let b = 9;
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

let c = 7;
let d = 9;
let result = document.querySelector('.out-2');
result.innerHTML = c / d;

// document.querySelector('.out-2').textContent =

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

let e = 3;
let f = 5;
let resultTwo = document.querySelector('.out-3');
resultTwo.innerHTML = e + f;

// document.querySelector('.out-3').textContent =

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

let e1 = '3';
let f1 = 5;
let resultThree = document.querySelector('.out-4');
resultThree.innerHTML = '3' + 5; //Конкатенация - так как 3 это строка!

// document.querySelector('.out-4').textContent =

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

let e2 = 3;
let f2 = 0;
let resultFour = document.querySelector('.out-5');
resultFour.innerHTML = e2 / f2;

// document.querySelector('.out-5').textContent =

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

let e3 = 3;
let f3 = 'Hello';
resultFive = document.querySelector('.out-6');
resultFive.innerHTML = e3 + f3;
// document.querySelector('.out-6').textContent =

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

let e4 = 3;
let f4 = 'Hello';
resultSix = document.querySelector('.out-7');
resultSix.innerHTML = e4 * f4;

// document.querySelector('.out-7').textContent =

// Task 8.
// По нажатию на кнопку .b-8 выполняется функция, которая выводит в div.out-8 то, что пользователь ввел в input.i-8.

//let buttonOne = document.querySelector('.b-8');
let inputOne = document.querySelector('.i-8');
let divOne = document.querySelector('.out-8');

function t8() {
  // value всегда получаем внутри функции
  // let data = document.querySelector('.i-8').value; // получили значение
  let a = inputOne.value;
  // тут выводим
  divOne.innerHTML = a;
}

document.querySelector('.b-8').onclick = t8;

// Task 9.
// По нажатию на кнопку .b-9 выполняется функция t9, которая выводит в div.out-9 то, что пользователь ввел в input.i-9. Добавьте очистку input после нажатия кнопки.

let inputTwo = document.querySelector('.i-9');
let divTwo = document.querySelector('.out-9');

function t9() {
  let b = inputTwo.value;
  divTwo.innerHTML = b;
  inputTwo.value = ''; // очистка инпута!
}

document.querySelector('.b-9').onclick = t9;

// Task 10.
// По нажатию на кнопку .b-10 выполняется функция t10, которая выводит в div.out-10 то, что пользователь ввел в input.i-10 умноженное на 20.

let inputThree = document.querySelector('.i-10');
let divThree = document.querySelector('.out-10');

function t10() {
  let c = inputThree.value * 10;
  divThree.innerHTML = c;
}

document.querySelector('.b-10').onclick = t10;

// Task 11.
// По нажатию на кнопку .b-11 выполняется функция t11, которая выводит на страницу в .out-11 число, которое ввел пользователь в i-11 и к нему добавленное число 55. В этой задаче мы не приводим к числу полученное из input.

let inputFour = document.querySelector('.i-11');
let divFour = document.querySelector('.out-11');

function t11() {
  let d = inputFour.value + 55;
  divFour.innerHTML = d;
}

document.querySelector('.b-11').onclick = t11;

// Task 12.
// По нажатию на кнопку выполняется функция t12. Функция должна получить данные из input i.12-1 и i.12-2 (пользователь вводин в них фамилию и имя).
//После чего вывести в .out-12  строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
//Обращаю ваше внимание - с этого момента мы работаем строго по заданию. Hello - с большой буквы. Между Hello имя один пробел (вы же включили отображение пробелов?).
//Вы не добавляете "от себя" - запятые, любые другие слова и символы. Аналогичные правила действуют и дальше по курсу.

let inputFive = document.querySelector('.i-12-1');
let inputSix = document.querySelector('.i-12-2');
let divFive = document.querySelector('.out-12');

function t12() {
  let i = inputFive.value;
  let f = inputSix.value;
  divFive.innerHTML = 'Hello ' + i + ' ' + f;
}

document.querySelector('.b-12').onclick = t12;

// Task 13.
// При нажатии кнопки .b-13 выполняется t13. Функция получает из input.i-13-1 и .i-13-2 числа в переменные a, b. После чего в .out-13 выводит их сумму.
// Преобразовывайте a, b в числа!!!!

let inputSeven = document.querySelector('.i-13-1');
let inputEight = document.querySelector('.i-13-2');
let divSix = document.querySelector('.out-13');

function t13() {
  let a = +inputSeven.value; // '+' преобразование в число - по дефолту из импута строка!
  let b = +inputEight.value;
  divSix.innerHTML = a + b;
}

document.querySelector('.b-13').onclick = t13;

// Task 14.
// По нажатию кнопки .b-14 выполняется функция t14. Она заменяет значение value в input.i-14 на строку 'Go';

let inputNine = document.querySelector('.i-14');

function t14() {
  inputNine.value = 'Go';
}

document.querySelector('.b-14').onclick = t14;

// Task 15.
//  По нажатию кнопки .b-15 выполняется функция t15. Она присваивает .i-15 свойство style.border = "4px solid red";

let inputTen = document.querySelector('.i-15');

function t15() {
  inputTen.style.border = '4px solid red'; // Присваивание стиля инпуту
}

document.querySelector('.b-15').onclick = t15;

// Task 16.
//По нажатию на кнопку .b-16 выполняется функция t16. Функция получает из .i-16-1 и i-16-2 числа. Выведите в .out-16 сумму данных чисел по нажатию кнопки b-16. Не переводите полученное из input в число!!!!

let inputEleven = document.querySelector('.i-16-1');
let inputTwelve = document.querySelector('.i-16-2');
let divSeven = document.querySelector('.out-16');

function t16() {
  let a = inputEleven.value;
  let b = inputTwelve.value;
  divSeven.innerHTML = a + b;
}

document.querySelector('.b-16').onclick = t16;

// Task 17.
// По нажатию на кнопку .b-17 выполняется функция t17. Функция получает из .i-17 число. Изучите работу кода и запомните отличия. Попробуйте ввести числа 5, 4zz, zz4, -200, 33.05

function t17() {
  let a = document.querySelector('.i-17').value;
  document.querySelector('.out-17-1').innerHTML = +a;
  document.querySelector('.out-17-2').innerHTML = parseInt(a, 10); // Преобразование строки в целое число (второе значение - система счесления). Число должно стоять в начале строки иначе NaN
  document.querySelector('.out-17-3').innerHTML = Number(a); // Преобразование в число (если возможно, т.е. '3', '55', '55.01' и тд иначе NaN)
}

document.querySelector('.b-17').onclick = t17;

// Task 18.
//  По нажатию на кнопку .b-18 выполняется функция t18. Функция получает из .i-18 число в переменную a. Выводит в out-18 результат операции parseFloat(a). Попробуйте ввести значения 5, 33.02, 33.9a, -20.01

function t18() {
  let a = document.querySelector('.i-18').value;
  document.querySelector('.out-18').innerHTML = parseFloat(a); // Преобразование в число с плавующей точкой - 33.9a = 33.9
}

document.querySelector('.b-18').onclick = t18;

// Task 19.
// По нажатию кнопки .b-19 функция t19 дожна в out-19 вывести сумму двух отрицательных чисел из input .i-19-1 и .i-19-2.

function t19() {
  let a = +document.querySelector('.i-19-1').value; //'+' преобразование в число - по дефолту из импута строка!
  let b = +document.querySelector('.i-19-2').value; //'+' преобразование в число - по дефолту из импута строка!
  document.querySelector('.out-19').innerHTML = a + b;
}

document.querySelector('.b-19').onclick = t19;

// Task 20
// При нажатии на кнопку .b-20 в out-20 выводится число - сколько раз была нажата кнопка .b-20;

let count = 0;

function t20() {
  count = count + 1; // можно сократить count++
  // тут допишите вывод в out-20
  document.querySelector('.out-20').innerHTML = count;
}

document.querySelector('.b-20').onclick = t20;
