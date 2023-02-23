"use strict";

//  1. Привет, object
{
    const user = {}
    user.name = "John"
    user.surname = "Smith"
    user.name = "Pete"
    delete user.name
    // console.log(user.name)
}

//  2. Проверка на пустоту
{
    const isEmpty = (obj) => {
        for (let key in obj) {
            return false
        }
        return true
    };

    let randomObject = {}
    // console.log(isEmpty(randomObject))

    randomObject["name"] = "randomObject"
    // console.log(isEmpty(randomObject))
}

//  3. Объекты-константы?
{
    const user = {
        name: "John",
    };

    // это будет работать?  Да!
    user.name = "Pete"
}

//  4. Сумма свойств объекта
{
    const salaries = {
        John: 100,
        Ann: 160,
        Pete: 130,
        Tim: "Oops",
        Rim: 500,
    }

    const calcSum = (obj) =>
        Object.values(obj).reduce((a, b) => (typeof b === "number" ? a + b : a));

    const sumSalaries = calcSum(salaries)

    // console.log(sumSalaries)
}

//  5. Умножаем все числовые свойства на 2
{
    const menu = {
        width: 200,
        height: 300,
        title: "My menu",
    };

    const multiplyNumeric = (obj) =>
        Object.values(obj).map((a) => (typeof a === "number" ? a * 2 : a));

    const multiplyMenu = multiplyNumeric(menu)

    // console.log(multiplyMenu)
}
