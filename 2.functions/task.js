// задача 1
function getArrayParams(...arr) {
    if (arr.length === 0) {
        return { min: 0, max: 0, avg: 0 };
    }

    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
        sum += arr[i];
    }

    const avg = +(sum / arr.length).toFixed(2);

    return { min, max, avg };
}

//задача 2 
// 1. Сумма элементов
function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((acc, val) => acc + val, 0);
}

// 2. Разница между максимумом и минимумом
function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

// 3. Разница суммы чётных и нечётных элементов
function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i];
        }
    }

    return sumEven - sumOdd;
}

// 4. Среднее арифметическое чётных элементов
function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEven = 0;
    let countEven = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
            countEven++;
        }
    }

    if (countEven === 0) return 0;
    return sumEven / countEven;
}
// задача 3
function makeWork(arrOfArr, func) {
    if (arrOfArr.length === 0) return 0;

    let maxResult = -Infinity;

    for (let i = 0; i < arrOfArr.length; i++) {
        const result = func(...arrOfArr[i]);
        if (result > maxResult) {
            maxResult = result;
        }
    }

    return maxResult;
}

console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.8 }
console.log(getArrayParams(5)); // { min: 5, max: 5, avg: 5 }

console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 10
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 53
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 5

const arr = [
    [10, 10, 11, 20, 10],
    [67, 10, 2, 39, 88],
    [72, 75, 51, 87, 43],
    [30, 41, 55, 96, 62]
];

console.log(makeWork(arr, summElementsWorker)); // 328
console.log(makeWork(arr, differenceMaxMinWorker)); // 86
console.log(makeWork(arr, differenceEvenOddWorker)); // 92
console.log(makeWork(arr, averageEvenElementsWorker)); // 72