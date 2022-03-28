'use strict';

// // Task #1

console.log(Boolean(Number('10')+1)); //  true
console.log('sub'+Number(false)); //  sub0 ___ string
console.log(16 * '   91  '); //  1456 ___ number
console.log(true-70); //  -69 ___ number
console.log(Number(1 + '1')+1); //  12 ___ number


// // Task #2

const hourse = +prompt('Укажите количество часов');
const seconds = (hourse*3600);

if (isNaN(hourse)) {
    alert('Ошибка. Необходимо ввести число.');
}
else {
    alert(`${hourse} * 3600 = ${seconds} секунд`);
}


// Task #3

let num =1;
num += 12; //  сумирует значение num+12=13
num -= 14; //  отнимает значение num-14=-13
num *= 5; //  умножает значение num*5=5
num /= 7; //  делит значение num/7=0.1428
num ++; //  сумирует значение num+1=2
num --; //  отнимает значение num-1=0

alert(num)