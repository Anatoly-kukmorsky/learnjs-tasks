'use strict'

//  1. Переведите текст вида border-left-width в borderLeftWidth
{
    // let a = '06.09.1983'
    // let c = a.split(".").reverse().join('-')
    // let b = new Date(c)
    // console.log(b)

    const camelize = (str) =>
        str.split('-').map((word, index) =>
            index > 0 ? `${word[0].toUpperCase()}${word.slice(1)}` : word).join(' ');
    
    // console.log(camelize("background-color"))
    // console.log(camelize("!-a-b-c-d-e-f-g-!"))
}

//  2. Фильтрация по диапазону
{
    const filterRange = (arr, a, b) => 
        arr.filter(item => a <= item && b >= item).sort((a, b) => a > b)
    

    // console.log(filterRange([2, 3, 5, 6, 8, 1, 9], 1, 5))
}

//  3. Фильтрация по диапазону "на месте"
{
    const filterRangeInPlace = (arr, a, b) => { 

         for (let i = 0; i < arr.length; i++) {
             let val = arr[i];

             // удалить, если за пределами интервала
             if (val < a || val > b) {
                 arr.splice(i, 1);
                 i--;
             }
         }
}
    const arr = [2, 3, 5, 6, 8, 1, 9]
    
    // filterRangeInPlace(arr, 1, 3)
    // console.log(arr)
}

//  4. Сортировать в порядке по убыванию
{
    const sorted = (arr) => arr.sort((a, b) => a < b)

    const arr = [5, 2, 1, -10, 8]
    // console.log(sorted(arr))
}

//  5. Скопировать и отсортировать массив
{
    const copySorted = (arr) => arr.slice().sort()

    const arr = ["HTML", "JavaScript", "CSS"]

    // console.log(copySorted(arr))
}

//  6. Создать расширяемый калькулятор
{
    function Calculator() {
        this.methods = {
            "-": (a, b) => a - b,
            "+": (a, b) => a + b,
        };

        this.calculate = function (str) {
            let split = str.split(" "),
                a = +split[0],
                op = split[1],
                b = +split[2];

            if (!this.methods[op] || isNaN(a) || isNaN(b)) {
                return NaN;
            }

            return this.methods[op](a, b);
        };

        this.addMethod = function (name, func) {
            this.methods[name] = func;
        };
    }

    let calc = new Calculator();
    calc.addMethod("*", (a, b) => a * b);
    calc.addMethod("/", (a, b) => a / b);
    calc.addMethod("**", (a, b) => a ** b);

    let result = calc.calculate("2 ** 3");
    // console.log(result); 
}

//  7. Трансформировать в массив имён
{
    const vasya = { name: "Вася", age: 25 };
    const petya = { name: "Петя", age: 30 };
    const masha = { name: "Маша", age: 28 };

    const users = [vasya, petya, masha];

    const names = (arr) => arr.map((item) => item.name);

    // console.log(names(users)); 
}

// 8. Трансформировать в объекты
{
    const vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    const petya = { name: "Петя", surname: "Иванов", id: 2 };
    const masha = { name: "Маша", surname: "Петрова", id: 3 };

    const users = [vasya, petya, masha];

    const usersMapped = (arr) =>
        arr.map((user) => ({
            fullName: `${user.name} ${user.surname}`,
            id: user.id,
        }));

    // console.log(usersMapped(users));
}

//  9. Отсортировать пользователей по возрасту
{
    const sortByAge = (users) => 
        users.sort((a, b) => (a.age > b.age ? 1 : -1));
    

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    const users = [vasya, petya, masha];

    // console.log(sortByAge(users));
}

//  10. Перемешайте массив
{
    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    shuffle(arr);
    // console.log(arr);
}

//  11. Получить средний возраст
{
    const getAverageAge = (arr) =>
        Math.floor(arr.reduce((sum, item) => sum + item.age, 0) / arr.length)

    const vasya = { name: "Вася", age: 25 };
    const petya = { name: "Петя", age: 30 };
    const masha = { name: "Маша", age: 21 };

    const arr = [vasya, petya, masha];

    // console.log(getAverageAge(arr))
        
}

//  12. Оставить уникальные элементы массива
{
    const unique = (arr) => {
        const uniqueArr = []

        for (let item of arr) {
            if (!uniqueArr.includes(item)) uniqueArr.push(item);
        }
        return uniqueArr
    }

    let arr = [4, 0, 2, 4, 4, 5, 5, 0, 8]

    // console.log(unique(arr))
        
}

//  13. Создайте объект с ключами из массива
{
    const groupById = (arr) => 
        arr.reduce((obj, value) => {
            obj[value.id] = value;
            return obj;
        }, {});
    

    const users = [
        { id: "john", name: "John Smith", age: 20 },
        { id: "ann", name: "Ann Smith", age: 24 },
        { id: "pete", name: "Pete Peterson", age: 31 },
    ];

    const usersById = groupById(users);
    // console.log(usersById);

} 
