'use strict'

//  1.Фильтрация уникальных элементов массива
{
    // const unique = (arr) => Array.from(new Set(arr));
    const unique = (arr) => [...new Set(arr)];
    const values = [2, 2, '4', 0, 0, '0', 5]
    // console.log(unique(values))
}

//  2. Отфильтруйте анаграммы
{
    function aclean(arr) {
        let map = new Map();

        arr.forEach((word) => {
            map.set(word.split("").sort().join("").toLowerCase(), word);
        });

        // return Array.from(map.values());
        return [...map.values()];
    }

    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    // console.log(aclean(arr))
}

//  3. Перебираемые ключи
{
    let map = new Map();

    map.set("name", "John");

    let keys = [...map.keys()]
    // let keys = Array.from(map.keys());

    keys.push("more", "0");

    // console.log(keys); // name, more
}


