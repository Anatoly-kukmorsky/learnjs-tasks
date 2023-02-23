"use strict";

//  1. Обязателен ли "else"?
{
    function checkAge1(age) {
        if (age > 18) {
            return true;
        } else {
            // ...
            return confirm("Родители разрешили?")
        }
    }

    function checkAge2(age) {
        if (age > 18) {
            return true;
        }
        // ...
        return confirm("Родители разрешили?")
    }

    // Функции работают одинаково
}

//  2. Перепишите функцию, используя оператор '?' или '||'
{
    const checkAge1 = (age) => (age > 18 ? true : confirm("Родители разрешили?"))

    const checkAge2 = (age) => age > 18 || confirm("Родители разрешили?")
}

//  3. Функция min(a, b)
{
    const minNumber = (a, b) => Math.min(a, b);
    // console.log(minNumber(190, 180))
}

//  4. Функция pow(x,n)
{
    const pow = (x, n) => `${x} в степени ${n} = ${x ** n}`

    const showPow = (x, n) =>
        n < 1
            ? alert(`Число ${n} меньше 1.\nВведите число больше 1`) &
              alert(pow(x, prompt("Введите второе целое положительное число")))
            : alert(pow(x, n))

    // showPow(
    //     prompt("Введите первое целое положительное число"),
    //     prompt("Введите второе целое положительное число")
    // )
}
