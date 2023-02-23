'use strict'

//  1. Скопирован ли массив?
{
    let fruits = ["Яблоки", "Груша", "Апельсин"]

    let shoppingCart = fruits

    shoppingCart.push("Банан")

    // console.log(fruits.length)  // 4
}

//  2. Операции с массивами
{
    const styles = ['Джаз', 'Блюз']
    // console.log(styles)
    styles.push('Рок-н-ролл')
    // console.log(styles)
    styles[Math.round(styles.length / 2) - 1] = "Классика"
    // console.log(styles)
    styles.shift()
    // console.log(styles)
    styles.unshift('Рэп', 'Рэгги')
    // console.log(styles)
}

//  3. Вызов в контексте массива
{
    let arr = ["a", "b"]

    arr.push(function () {
        console.log(this)
    });

    // arr[2]() // Array(3) [ "a", "b", () ]
}

//  4. Сумма введённых чисел
{
    const sumInput = () => {
        let numbers = []

        while (true) {
            let value = prompt("Введите число", 0)

            // Прекращаем ввод, если:
            if (value === "" || value === null || !isFinite(value)) break

            numbers.push(+value);
        }

        // let sum = 0;
        // for (let number of numbers) {
        //     sum += number;
        // }
        // return sum
        return (numbers.reduce((a, b) => a + b))
    }

    // console.log(sumInput())
}

//  5. Подмассив наибольшей суммы
{
    function getMaxSubSum(arr) {
        let maxSum = 0;
        let partialSum = 0;

        for (let item of arr) {
            // для каждого элемента массива
            partialSum += item; // добавляем значение элемента к partialSum
            maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
            if (partialSum < 0) partialSum = 0; // ноль если отрицательное
        }

        return maxSum;
    }

    const getMaxSubSum1 = (arr) => {
        let currentChar = 0,
            lastChar = arr[0],
            biggestCharArr = [arr[0]],
            result;

        for (let char of arr) {
            currentChar += char;

            if (currentChar < 0) {
                currentChar = 0;
                continue;
            }

            if (lastChar < currentChar) {
                biggestCharArr.push(currentChar);
            }

            lastChar = currentChar;
        }

        result = Math.max.apply(null, biggestCharArr);

        return result > 0 ? result : 0;
    };

    // getMaxSubSum1([-1, 2, 3, -9, 11]);


    console.log(getMaxSubSum([1, 2, 3, -4, 5]))
    console.log(getMaxSubSum([-1, 2, 3, -9]))
    console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
    console.log(getMaxSubSum([-2, -1, 1, 2]))
    console.log(getMaxSubSum([100, -9, 7, -3, 5]))
    console.log(getMaxSubSum([1, 2, 3]));
    console.log(getMaxSubSum([-1, -2, -3]));
}
