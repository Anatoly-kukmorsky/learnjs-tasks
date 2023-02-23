'use strict'

//  1. Сумма пользовательских чисел
{
    const sum = (a, b) => 
        alert(a + b)
    
    // sum(+prompt(), +prompt())
}

//  2. Почему 6.35.toFixed(1) == 6.3?
{
    // console.log((1.35).toFixed(1)); // 1.4
    // console.log((6.35).toFixed(1)); // 6.3

    // console.log((6.35 * 10).toFixed(1) / 10)
}

//  3. Ввод числового значения
{
    const readNumber = () => {
        let num;

        do {
            num = prompt("Введите число", 0);
        } while (!isFinite(num));

        if (num === null || num === "") return null;

        return +num;
    }

    // readNumber()

}

//  4. Случайное число от min до max
{
    const random = (min, max) =>
        (min + Math.random() * (max - min))
    
    // console.log(random(2, 4));
}

//  5. Случайное целое число от min до max
{
    const randomInteger = (min, max) => {
        let random = (min - 0.5 + Math.random() * (max - min + 1))
        return Math.round(random)
    }
    // console.log(randomInteger(4, 9))
}