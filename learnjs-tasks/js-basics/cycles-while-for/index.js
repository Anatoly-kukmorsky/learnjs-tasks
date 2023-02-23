"use strict";

//  1. Какое последнее значение выведет этот код? Почему?
{
    // let i = 3

    // while (i) {
        // alert(i--)
    // }

    // 1 => После вывода 1 выполнение цикла уменьшает i с 1 на 0,
    // и проверка while (i) остановит цикл при i = 0
}

//  2. Какие значения выведет цикл while?
{
    // Префиксный вариант ++i
    // let i = 0
    // while (++i < 5) alert(i) // 1, 2, 3, 4

    // Постфиксный вариант i++
    // let j = 0
    // while (j++ < 5) alert(j) // 1, 2, 3, 4, 5
}

//  3. Какие значения выведет цикл for?
{
    // Постфиксная форма:
    // for (let i = 0; i < 5; i++) alert(i) // 0, 1, 2, 3, 4
    
    // Префиксная форма:
    // for (let i = 0; i < 5; ++i) alert(i) // 0, 1, 2, 3, 4
}

//  4. Выведите чётные числа
{
//    for (let i = 2; i <= 10; i++) {
    //    if (i % 2 !== 0) continue
    //    console.log(i)
//    }
}

//  5. Замените for на while
{
    // for (let i = 0; i < 3; i++) {
        // console.log(`number ${i}!`)
    // }

    // let i = 0
    // while (i < 3) {
        // console.log(`number ${i}!`)
        // i++
    // }
}

//  6. Повторять цикл, пока ввод неверен
{
    let num
    
    const promptNumber = (num) => {
        do {
            num = prompt("Введите число больше 100?", 0)
        } while (num <= 100 && num)
    }
    
    // promptNumber(num)
}

//  7. Вывести простые числа
{
    const isPrime = (num) => {
        const screenedOut = []
        const primes = []

        for (let i = 2; i <= num; i++) {
            if (!screenedOut[i]) {
                primes.push(i)
                for (let j = i * i; j <= num; j += i) {
                    screenedOut[j] = true
                }
            }
        }
        return primes
    }

    // console.log(isPrime(1000))
}