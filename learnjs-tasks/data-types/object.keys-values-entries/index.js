'use strict'

//  1. Сумма свойств объекта
{
    const salaries = {
        John: 100,
        Pete: 300,
        Mary: 250,
    };

    const sumSalaries = (obj) => {
        let result = 0

        for (let elem of Object.values(obj)) {
            result += elem
        }

        return result
    }

    // console.log(sumSalaries(salaries))
}

//  2. Подсчёт количества свойств объекта
{
    const count = (obj) => Object.keys(obj).length;

    let user = {
        name: "John",
        age: 30,
    };

    // console.log(count(user)); 
}




