// задание 1
"use strict";

function solveEquation(a, b, c) {
    // Вычисляем дискриминант
    const d = b ** 2 - 4 * a * c;

    if (d < 0) {
        return []; // корней нет
    } else if (d === 0) {
        const root = -b / (2 * a);
        return [root]; // один корень
    } else {
        const sqrtD = Math.sqrt(d);
        const root1 = (-b + sqrtD) / (2 * a);
        const root2 = (-b - sqrtD) / (2 * a);
        return [root1, root2]; // два корня
    }
}

// Примеры проверки:
console.log(solveEquation(1, -3, 2)); // [2, 1]
console.log(solveEquation(1, 2, 1));  // [-1]
console.log(solveEquation(1, 0, 1));  // []

// задание 2
"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    // Преобразуем в числа (если строка)
    const p = parseFloat(percent);
    const c = parseFloat(contribution);
    const a = parseFloat(amount);
    const n = parseFloat(countMonths);

    // Проверяем, что все аргументы — числа (не NaN)
    if (isNaN(p) || isNaN(c) || isNaN(a) || isNaN(n)) {
        return false;
    }

    // Если тело кредита <= 0, возвращаем 0
    const creditBody = a - c;
    if (creditBody <= 0) {
        return 0;
    }

    // Месячная процентная ставка (в долях)
    const P = p / 100 / 12;

    // Ежемесячный платёж по формуле
    const payment = creditBody * (P + (P / (Math.pow(1 + P, n) - 1)));

    // Общая сумма выплат
    const total = payment * n;

    // Округление до двух знаков
    return Math.round(total * 100) / 100;
}

// Проверка на примерах из задания
console.log(calculateTotalMortgage(10, 0, 50000, 12));   // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24));   // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36));   // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36));   // 12479.52