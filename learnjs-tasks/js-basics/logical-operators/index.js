"use strict";

//  1. Что выведет alert (ИЛИ)?
{
    // alert(null || 2 || undefined)    // 2
}

//  2. Что выведет alert (ИЛИ)?
{
    // alert(alert(1) || 2 || alert(3))    // 1, затем 2
}

//  3. Что выведет alert (И)?
{
    // alert(1 && null && 2)    // null
}

//  4. Что выведет alert (И)?
{
    // alert(alert(1) && alert(2))     // undefined
}

//  5. Что выведет этот код?
{
    // alert(null || (2 && 3) || 4)    // 3
}

//  6. Проверка значения из диапазона
{
    // let age = +prompt()
    // if (age >= 14 && age <= 90) { }
    // let resolution = age >= 14 && age <= 90 ? 1 : 0
}

//  7. Проверка значения вне диапазона
{
    // if (age < 14 || age > 90) {}
    // if (!(age >= 14 && age <= 90)) {}
    // let resolution = !(age >= 14 && age <= 90) ? 1 : 0;
}

//  8. Вопрос об "if"
{
    // if (-1 || 0) alert("first")            // да
    // if (-1 && 0) alert("second")           // нет
    // if (null || (-1 && 1)) alert("third")  // да
}

//  9. Проверка логина
{
    // let userName = prompt("Кто там?", "Админ")

    if (userName === "Админ") {
        let password = prompt("Пароль?", "")

        if (password === "Я главный") {
            alert("Здравствуйте!")
        } else if (password === "" || password === null) {
            alert("Отменено")
        } else {
            alert("Неверный пароль")
        }

    } else if (userName === "" || userName === null) {
        alert("Отменено")
    } else {
        alert("Я вас не знаю")
    }
}
