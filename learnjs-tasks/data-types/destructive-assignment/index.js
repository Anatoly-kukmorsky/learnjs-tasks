'use strict'

//  1. Деструктурирующее присваивание
{
    let user = {
        name: "John",
        years: 30,
    };

    let { name, years: age, isAdmin = false } = user;

    // console.log(name, age, isAdmin)
}

//  2. Подсчёт количества свойств объекта
{
   let salaries = {
       John: 100,
       Pete: 300,
       Mary: 250,
   };
    
    const topSalary = (obj) => {
        let [max, maxName] = [0, null]

        for (const [name, salary] of Object.entries(obj)) {
            max < salary ? `${(max = salary)}  ${(maxName = name)}` : max  
        }

        return maxName;
    }

    // console.log(topSalary(salaries))
}




