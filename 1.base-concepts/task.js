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