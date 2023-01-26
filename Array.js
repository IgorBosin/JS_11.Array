// Создание массива
1) let arr = new Array()
2) let arr = []
//_____________________________________________________________________________________________________________________


// Получение значений массива
let arr = [
    'Igor',
    {
        type: 'JS',
        age: 36,
    },
    true,
    function () {
        return 'Hi Igor';
    },
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
];
console.log(arr[0])        // Igor
console.log(arr[1])        // { type: 'JS', age: 36 }
console.log(arr[2])        // true
console.log(arr[3])        // [Function (anonymous)]
console.log(arr[3]())      // Hi Igor
console.log(arr[4])        // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log(arr[4][0])     // [ 1, 2, 3 ]
console.log(arr[4][0][1])  // 2
//_____________________________________________________________________________________________________________________


// Получение длины массива, удаление последних элементов
let arr = ['Igor', 'Maria', 'Alex']
console.log(arr.length)   // 3
arr.length = 2
console.log(arr)          // [ 'Igor', 'Maria' ]
console.log(arr.length)   // 2
//_____________________________________________________________________________________________________________________


// Получение длины массива, удаление последних элементов
let arr = ['Igor', 'Maria', 'Alex']
arr[0] = 'Petr'
arr[3] = 'Ivan'
console.log(arr) // [ 'Petr', 'Maria', 'Alex', 'Ivan' ]
//_____________________________________________________________________________________________________________________


// Изменение массива (конец/начало)
let arr = ['a', 'b', 'c',]
1) arr.push('d','e',)           // [ 'a', 'b', 'c', 'd', 'e' ] (добавление в конец)
2) arr.unshift('d','e',)  // [ 'd', 'e', 'a', 'b', 'c' ] (добавление в начало)
3) arr.shift()                  // ['b', 'c' ] (удаление первого элемента).
// Можно присвоить(вернуть строку) удаленный элемент переменной: let arr1 = arr.shift() // a
4) arr.pop()                   // ['a', 'b' ] (удаление последнего элемента).
// Можно присвоить(вернуть строку) удаленный элемент переменной: let arr1 = arr.shift() // c
//_____________________________________________________________________________________________________________________


// Удаление конкретных элементов
let arr = ['a','b','c','d']
delete arr[1]  // [ 'a', <1 empty item>, 'c', 'd' ] НЕЛЬЗЯ - длина массива = 4
arr.splice(-1,1) // [ 'a', 'b', 'c' ] т.е. начиная с -1 элемента(d) удалить один элемент.
// Можно присвоить(вернуть массив) удаленный элемент переменной: let arr1 = arr.splice(-1,1) // [ 'd' ]
arr.splice(1,1)  // [ 'a', 'c', 'd' ] т.е. начиная с 1 элемента(b) удалить один элемент.
// Можно присвоить(вернуть массив) удаленный элемент переменной: let arr1 = arr.splice(1,1) // [ 'b' ]
arr.splice(1,2)  // [ 'a', 'd' ] т.е. начиная с 1 элемента(b) удалить два элемента.
// Можно присвоить(вернуть массив) удаленные элементы переменной: let arr1 = arr.splice(1,2) // [ 'b', 'c' ]
//_____________________________________________________________________________________________________________________


// Добавление конкретных элементов в нужную позицию(замена элементов)
let arr = ['a', 'b', 'c', 'd',]
arr.splice(0,0,'W')        // [ 'W', 'a', 'b', 'c', 'd' ]       т.е. перед [0] поз-ей доб эл-та 'W'
arr.splice(2,0,'W', 'w')   // [ 'a', 'b', 'W', 'w', 'c', 'd' ]  т.е. перед [2] поз-ей доб эл-тов 'W' и 'w'
arr.splice(0,2,'W')        // [ 'W', 'c', 'd' ]                 т.е. перед [0] поз-ей доб эл-та 'W' и удаление двух эл-тов начиная с поз-ии [0]
arr.splice(-2,0,'W')       // [ 'a', 'b', 'W', 'c', 'd' ]       т.е. перед [-2] поз-ей доб эл-та 'W'
arr.splice(-2,1,'W')       // [ 'a', 'b', 'W', 'd' ]            т.е. перед [-2] поз-ей доб эл-та 'W' и удаление одного эл-та начиная с [-2] поз-ии
arr.splice(-1,2,'W', 'w')  // [ 'a', 'b', 'c', 'W', 'w' ]       т.е. перед [-1] поз-ей доб эл-та 'W' и удаление двух эл-тов начиная с [-2] поз-ии
//_____________________________________________________________________________________________________________________


// Смена порядка элементов на обратный
let arr = [1, 2, 3]
let arr2 = arr.reverse() // [ 3, 2, 1 ]
//_____________________________________________________________________________________________________________________


// Преобразование каждого элемента массива('map')
let arr = ['Igor', 'Maria', 'Alex']
let res = arr.map(function (item, index, array) {
    return item[0]    // [ 'I', 'M', 'A' ]
    return index+'W'  // [ '0W', '1W', '2W' ]
    return array[0]   // [ 'Igor', 'Igor', 'Igor' ]
})
//_____________________________________________________________________________________________________________________


// Преобразование строки в массив
let str = "Igor, Maria, Alex"
let arr = str.split(', ') // [ 'Igor', 'Maria', 'Alex' ] т.к. слова в строке разделены запятой+пробелом указываем это в ковычках
//_____________________________________________________________________________________________________________________


// Преобразование массива в строку
let arr = ['Igor', 'Maria', 'Alex']
let str = arr.join(' ')     // 'Igor Maria Alex'  т.к в скобках указали пробел-слова разделились пробелом
let str = String(arr)       // 'Igor,Maria,Alex'  здесь разделитель всегда будет запятая
//_____________________________________________________________________________________________________________________


// Тип массивов. Проверка массива на соответствие массиву
let arr = ['Igor', 'Maria', 'Alex']
console.log(typeof arr)          // object, т.е. тип массива такой же, как и у {}
console.log(Array.isArray(arr))  // true, т.е. это конкретно массив, а не {}
//_____________________________________________________________________________________________________________________


// Задача №1 Длина массива
let arr = ['Ваня', 'Петя', 'Оля',];
let newArr = arr;
newArr.push('Игорь');
console.log(arr.length) // 4
//_____________________________________________________________________________________________________________________


// Задача №2 Добавление изменение и удаление элементов массива
let arr = ['Ivan', 'Petya']
arr[2] = 'Olga'
arr[1] = 'Igor'
console.log(arr.shift()) // Ivan
arr.unshift('Masha', 'Pasha')
console.log(arr)         // [ 'Masha', 'Pasha', 'Igor', 'Olga' ]
//_____________________________________________________________________________________________________________________


// Задача №3 Удалить 2ой элемент и вернуть его в  переменную
let arr = ['Ваня', 'Иштван', 'Оля'];
let arr2 = arr.splice(1, 1)
console.log(arr)  // [ 'Ваня', 'Оля' ]
console.log(arr2) // [ 'Иштван' ]
//_____________________________________________________________________________________________________________________


// Задача №4 Сделать из строки массив
let str = 'Ваня, Оля, Коля';
let arr = str.split(', ')
console.log(Array.isArray(arr)) // true
console.log(str)                // Ваня, Оля, Коля
//_____________________________________________________________________________________________________________________


// Задача №5 Изменить fruits через другую переменную
let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");
console.log(fruits.length); // 4
//_____________________________________________________________________________________________________________________


// Задача №6 Добавление изменение и удаление элементов массива
let styles = ['Jazz', 'Bluzze']
styles.push('RocknRoll')
styles.splice(1, 1, 'Classic')
console.log(styles.shift()) // Jazz
styles.splice(0, 0, 'Rap', 'Reggi')
console.log(styles)         // [ 'Rap', 'Reggi', 'Classic', 'RocknRoll' ]
//_____________________________________________________________________________________________________________________


// Задача №7 результат вывода?
let arr = ["a", "b"];
arr.push(function () {
    console.log(this);
});
arr[2](); // [ 'a', 'b', [Function (anonymous)] ]
//_____________________________________________________________________________________________________________________


// Задача №8 сумма введенных чисел
// Вариант 1
function sumInput() {
    let summ = [];
    while (true) {
        let num = prompt('Vvedite chislo', '');
        if (num === '' || num === null || !isFinite(num)) break
        summ.push(+num);
    }
    return summ.reduce(function (accum, item) {
        return accum + item
    })
}
console.log( sumInput() );

// Вариант 2
function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("Введите число", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log( sumInput() );
//_____________________________________________________________________________________________________________________


// Задача №9 for [1, 2, 2] return 1^2 + 2^2 + 2^2 = 9
// Вариант 1
function squareSum(numbers) {
    let arr2 = []
    numbers.forEach(function (values) {
        return arr2.push(values ** 2)
    })
    return arr2.reduce(function (acc, item) {
        return acc + item;
    }, 0)
}
console.log(squareSum([1, 2, 2])) // 9

// Вариант 2
function squareSum(numbers) {
    return numbers.reduce(function (sum, n) {
        return (n * n) + sum;
    }, 0)
}
console.log(squareSum([1, 2, 2])) // 9

// Вариант 3
function squareSum(numbers) {
    let n = 0
    numbers.forEach(function (values) {
        n += values * values
    });
    return n
}
console.log(squareSum([1, 2, 2])) // 9
//_____________________________________________________________________________________________________________________


// Задача №10 подсчитать все true
// Вариант 1
function countSheeps(arrayOfSheep) {
    let n = 0
    for (const values of arrayOfSheep) {
        if (values === true) {
            n++
        }
    }
    return n
}
console.log( countSheeps([
    true, true, true, false,
    true, true, true, true,
    false, false, true, true]) ) // 9

// Вариант 2
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length;
}
console.log(countSheeps([
    true, true, true, false,
    true, true, true, true,
    false, false, true, true])) // 9

// Вариант 3
function countSheeps(arrayOfSheep) {
    let num = 0;
    for (let i = 0; i < arrayOfSheep.length; i++)
        if (arrayOfSheep[i] == true)
            num++;
    return num;
}
console.log(countSheeps([
    true, true, true, false,
    true, true, true, true,
    false, false, true, true])) // 9
//_____________________________________________________________________________________________________________________


// Задача №11 Вернуть массив чисел умноженный на 2
// Вариант 1
function maps(x) {
    return x.map(function (item) {
        return item * 2
    })
}
console.log(maps([1, 2, 3])) // [ 2, 4, 6 ]

// Вариант 2
function maps(x) {
    return x.map(n => n * 2);
}
console.log(maps([1, 2, 3])) // [ 2, 4, 6 ]

// Вариант 3
maps = x => x.map(e => e * 2);
console.log(maps([1, 2, 3])) // [ 2, 4, 6 ]
//_____________________________________________________________________________________________________________________


// Задача №12 Вернуть обратный массив чисел из одного числа
// Вариант 1
function digitize(n) {
    let arr = []
    n = String(n)
    for (const char of n) {
        arr.push(+char)
    }
    return arr.reverse()
}
console.log(digitize(32145)) // [ 5, 4, 1, 2, 3 ]

// Вариант 2
function digitize(n) {
    return String(n).split('').map(Number).reverse()
}
console.log(digitize(32145)) // [ 5, 4, 1, 2, 3 ]

// Вариант 3
function digitize(n) {
    return n.toString().split('').map(Number).reverse();
}
console.log(digitize(32145)) // [ 5, 4, 1, 2, 3 ]

// Вариант 4
function digitize(n) {
    return Array.from(String(n), Number).reverse();
}
console.log(digitize(32145)) // [ 5, 4, 1, 2, 3 ]
//_____________________________________________________________________________________________________________________


// Задача №13 Вернуть сумму массива чисел [1,-4,7,12]=>1+7+12=20
// Вариант 1
function positiveSum(arr) {
    let arrFilter = arr.filter(function (item) {
        return item > 0
    })
    return arrFilter.reduce(function (acc, item) {
        return acc + item
    }, 0)
}
console.log(positiveSum([1, -4, 12])) // 13

// Вариант 2
function positiveSum(arr) {
    let arrFilter = arr.filter(item =>
        item > 0 // т.к.выражен одно-можно без {} и без return
    )
    return arrFilter.reduce((acc, item) =>
            acc + item // // т.к.выражен одно-можно без {} и без return
        , 0)
}
console.log(positiveSum([1, -4, 12])) // 13

// Вариант 3
function positiveSum(arr) {
    let num = 0
    for(let i=0 ; i < arr.length ; i++ ) {
        if(arr[i] > 0 ) {num += arr[i]}
    }
    return num
}
console.log(positiveSum([1, -4, 12])) // 13

// Вариант 4
function positiveSum(arr) {
    let summ = 0
    arr.reduce(function (acc, item) {
        if (item > 0) {
            summ += item
        }
    }, 0)
    return summ
}
console.log(positiveSum([1, -4, 12])) // 13

// Вариант 5
function positiveSum(arr) {
    return arr.filter(item => item>0).reduce((acc,item) => acc+item,0)
}
console.log(positiveSum([1, -4, 12])) // 13
//_____________________________________________________________________________________________________________________


// Задача №14 Вернуть номер элемента массива
function findNeedle(haystack) {
    return "found at position " + haystack.indexOf('needle')
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])) // found at position 5
//_____________________________________________________________________________________________________________________


// Задача №15 проверить значение в массиве. вернуть true/false
// Вариант 1
function check(a, x) {
    return a.includes(x);
};
console.log(check([66, 101], 66)) // true

// Вариант 2
function check(a, x) {
    return a.indexOf(x) > -1 ? true : false;
};
console.log(check([66, 101], 66)) // true
//_____________________________________________________________________________________________________________________


// Задача №16 перемножить числа массива
// Вариант 1
function grow(x) {
    return x.reduce(function (acc, item) {
        return acc * item
    })
}
console.log(grow([1, 2, 3, 4])) // 24

// Вариант 2
const grow = (nums) => nums.reduce((product, num) => product * num, 1);
console.log(grow([1, 2, 3, 4])) // 24
//_____________________________________________________________________________________________________________________


// Задача №17 получить сумму двух массивов
// Вариант 1
function arrayPlusArray(arr1, arr2) {
    arr1 = arr1.reduce(function (acc, item) {
        return acc + item
    }, 0)
    arr2 = arr2.reduce(function (acc, item) {
        return acc + item
    }, 0)
    return arr1 + arr2;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) // 21

// Вариант 2
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce(function (acc, item) {
        return acc + item
    }, 0)
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) // 21

// Вариант 3
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, item) =>
            acc + item
        , 0)
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) // 21

// Вариант 4
function arrayPlusArray(arr1, arr2) {
    let summ = 0
    for (let i = 0; i < arr1.length; i++) {
        summ += arr1[i]
    }
    for (let i = 0; i < arr1.length; i++) {
        summ += arr2[i]
    }
    return summ
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) // 21
//_____________________________________________________________________________________________________________________


// Задача №18 преобразовать массив в строку
// Вариант 1
function smash(words) {
    return words.join(' ')
};
console.log(smash(['hello', 'world'])) // hello world

// Вариант 2
function smash(words) {
    "use strict";
    var smashed = '';
    for (var i = 0; i < words.length; i++) {
        smashed += words[i];
        if (i != words.length - 1) {
            smashed += ' ';
        }
    }
    return smashed;
};
console.log(smash(['hello', 'world'])) // hello world

// Вариант 3
function smash(words) {
    "use strict";
    return words.join(" ").trim();
};
console.log(smash(['hello', 'world'])) // hello world
//_____________________________________________________________________________________________________________________


// Задача №19 получить сумму массива из чисел и строк
// Вариант 1
function sumMix(x){
    return x.reduce(function(acc,item){
        return +acc+ +item
    },0)
}
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])) // 42

// Вариант 2
function sumMix(x) {
    return x.reduce((acc, item) => +acc + +item)
}
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])) // 42

// Вариант 3
function sumMix(x) {
    return x.map(a => +a).reduce((a, b) => a + b);
}
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])) // 42
//_____________________________________________________________________________________________________________________


// Задача №20 вернуть только нечетные элементы массива
// Вариант 1
function removeEveryOther(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++)
        if (i % 2 === 0) arr2.push(arr[i])
    return arr2
}
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // [ 1, 3, 5, 7, 9 ]

// Вариант 2
function removeEveryOther(arr) {
    return arr.filter(function (elem, index) {
        return index % 2 === 0;
    });
}
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // [ 1, 3, 5, 7, 9 ]

// Вариант 3
function removeEveryOther(arr){
    for(i = 1; i < arr.length; i++){
        arr.splice(i,1)
    }
    return arr
}
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // [ 1, 3, 5, 7, 9 ]
//_____________________________________________________________________________________________________________________


// Задача №21 вернуть только те эл-ты, котор делятся на второй параметр без остатка
// Вариант 1
function divisibleBy(numbers, divisor) {
    let arr = []
    for (i = 0; i < numbers.length; i++)
        if (numbers[i] % divisor == 0) arr.push(numbers[i])
    return arr
}
console.log(divisibleBy([1, 3, 5, 7, 8, 10, 15], 2)) // [ 8, 10 ]

// Вариант 2
function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
}
console.log(divisibleBy([1, 3, 5, 7, 8, 10, 15], 2)) // [ 8, 10 ]

// Вариант 3
const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));
console.log(divisibleBy([1, 3, 5, 7, 8, 10, 15], 2)) // [ 8, 10 ]
//_____________________________________________________________________________________________________________________


// Задача №22 вернуть true если сумма (первого элемента)^2 больше суммы второго^3, иначе false
// Вариант 1
function arrayMadness(a, b) {
    if ((a.reduce((acc, item) => (acc + item ** 2), 0)) > (b.reduce((acc, item) => (acc + item ** 3), 0))) return true
    else return false
}
console.log(arrayMadness([5, 6, 7], [4, 5, 6])); // false

// Вариант 2
function arrayMadness(a, b) {
    return a.reduce((acc, item) => (acc + item ** 2), 0) > (b.reduce((acc, item) => (acc + item ** 3), 0))
}
console.log(arrayMadness([5, 6, 7], [4, 5, 6])); // false
//_____________________________________________________________________________________________________________________


// Задача №23 все числа массива вернуть ЧИСЛАМИ с обратным знаком (8 kyu Invert values)
function invert(array) {
    let arr2 = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            arr2.push(+(`-${array[i]}`))
        } else if (array[i] < 0) {
            arr2.push(0 - array[i])
        }
    }
    return arr2
}
console.log(invert([1, 2, -3, -4, 5])) // [ -1, -2, 3, 4, -5 ]
//_____________________________________________________________________________________________________________________


// Задача №24 строку конвертировать в массив и прибавить к каждому элементу его длину (8 kyu Add Length)
function addLength(str) {
    return str.split(' ').map(function (item) {
        return item + " " + item.length
    })
}
console.log(addLength('apple ban')) // [ 'apple 5', 'ban 3' ]
//_____________________________________________________________________________________________________________________


// Задача №25 найти все числа в интервале между integer и limit которые делятся без остатка (limit/integer) (8 kyu Find Multiples of a Number)
function findMultiples(integer, limit) {
    let arr = []
    for (let i = integer; i <= limit; i += integer) {
        arr.push(i)
    }
    return arr
}
console.log(findMultiples(5, 25)) // [ 5, 10, 15, 20, 25 ]
//_____________________________________________________________________________________________________________________


// Задача №26 изменить порядок слов в массиве на обратный (8 kyu My head is at the wrong end!)
function fixTheMeerkat(arr) {
    return arr.reverse()
}
console.log(fixTheMeerkat(["tail", "body", "head"])) // [ 'head', 'body', 'tail' ]
//_____________________________________________________________________________________________________________________


// Задача №27 вывести все числа массивом, которые идут до передаваемого в функцию числа(8 kyu Count the Monkeys!)
function monkeyCount(n) {
    arr = []
    for (i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr
}
console.log(monkeyCount(5)) // [ 1, 2, 3, 4, 5 ]
//_____________________________________________________________________________________________________________________


// Задача №28 просуммировать различия между последовательными парами в массиве в порядке убывания (8 kyu Sum of differences in array)
function sumOfDifferences(arr) {
    let a = 0
    let arr2 = arr.sort(function (a, b) {
        return b - a
    })
    for (let i = 0; i < arr2.length - 1; i++) {
        a += (arr2[i]) - (arr2[i + 1])
    }
    return a
}
console.log(sumOfDifferences([1, 2, 10])) // (10-2)+(2-1) = 9
console.log(sumOfDifferences([-3, -2, -1])) // (-1-(-2))+(-2-(-3)) = 2
//_____________________________________________________________________________________________________________________


// Задача №29 найти среднее значение чисел в массиве (8 kyu Calculate average)
function findAverage(array) {
    if (array.length == 0) return 0
    let arr = array.reduce(function (acc, item) {
        return (acc + item)
    }, 0)
    return arr / array.length
}
console.log(findAverage([1, 2, 3, 4])) // 2.5
//_____________________________________________________________________________________________________________________


// Задача №30 Проверить содержит ли массив определенное значение (8 kyu No Loops 2 - You only need one)
function check(a, x) {
    return a.includes(x)
};
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45)) // true
console.log(check(['what', 'a', 'great', 'kata'], 'kat')) // false
//_____________________________________________________________________________________________________________________


// Задача №31 Вернуть сумму чисел массива(8 kyu Sum Arrays)
function sum(numbers) {
    "use strict";
    return numbers.reduce(function (acc, item) {
        return acc + item
    }, 0)
};
console.log(sum([1, 5.2, 4, 0, -1])) // 9.2
//_____________________________________________________________________________________________________________________


// Задача №32 Вернуть только те значения, которые без остатка делятся на индекс (8 kyu Multiple of index)
// Вариант 1
function multipleOfIndex(array) {
    let arr = []
    for (let index in array) {
        if (array[index] % index == 0) arr.push(array[index])
    }
    return arr
}
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])) // [-6, 32, 25]

// Вариант 2
function multipleOfIndex(array) {
    return array.filter(function (value, index) {
        return value % index == 0
    })
}
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])) // [-6, 32, 25]
//_____________________________________________________________________________________________________________________


// Задача №33 массив чисел превратить в буквы(ASCII). Если буква глассная, то заменить число (8 kyu Is there a vowel in there?)
// Вариант 1
function isVow(a) {
    for (let i in a) {
        if (String.fromCharCode(a[i]) == ['u']) {
            a.splice(i, 1, String.fromCharCode(a[i]))
        }
        if (String.fromCharCode(a[i]) == ['a']) {
            a.splice(i, 1, String.fromCharCode(a[i]))
        }
        if (String.fromCharCode(a[i]) == ['i']) {
            a.splice(i, 1, String.fromCharCode(a[i]))
        }
        if (String.fromCharCode(a[i]) == ['o']) {
            a.splice(i, 1, String.fromCharCode(a[i]))
        }
        if (String.fromCharCode(a[i]) == ['e']) {
            a.splice(i, 1, String.fromCharCode(a[i]))
        }
    }
    return a
}
console.log(isVow([101, 117, 110, 113, 113])) // [ 'e', 'u', 110, 113, 113 ]
// Вариант 2

function isVow(a) {
    return a.map(function (item) {
        return 'aeuio'.includes(String.fromCharCode(item)) ? String.fromCharCode(item) : item
    })
}
console.log(isVow([101, 117, 110, 113, 114])) // [ 'e', 'u', 110, 113, 114 ]