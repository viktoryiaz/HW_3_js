// 1 Написать скрипт,кот сосчитает и выведет результат от возведения 2 в степень 10

let i = 1;
let result = 1;   // т.к. любое число в нулевой степени = 1
while (i <= 10) {
    result = result * 2;
    i++;
}
console.log(result);


// 1* Преобразовать 1 зад в функцию, принимающую на вход степень,в кот будет возводиться число 2
// вариант 1

const stepen = function(st) {
    let result = 1;
    for(let i = 1; i <= st; i++) {
        result = result * 2;
    }
    return result;
}
console.log(stepen(10));

//вариант 2

const stepen2 = function(ste) {
    return 2**ste;                     // **-это оператор возведения в степень
}
console.log(stepen2(10));


// 2 Написать скрипт, кот выведет 5 строк в консоль т о,чтобы в первой строке выводилось :) и с каждой строкой увеличивалось на 1

let smile = ":)";
let result1 = " ";
for (x = 1; x <= 5; x++) {
    result1 += smile;
    console.log(result1);
}

// 2* преобразовать зад 2 в функцию, принимающую на вход строку, кот и будет выводиться в консоль, а также колво строк для вывода
// вариант 1

function PrintSmile(stroka, numberOfRows) {   // названия любые
    let result = " "; 
    for (let i = 1; i <= numberOfRows; i++) {
        result += stroka;
        console.log(result)
    }
}
PrintSmile(":(", 6);

//вариант 2

function PrintSmile2(stroka, numberOfRows) {
    for (let i = 1; i <= numberOfRows; i++) {
        console.log(stroka.repeat(i));
    }
}
PrintSmile2(":(", 4);


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных,
// и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)