'use strict'

//  1.Фильтрация уникальных элементов массива
{
    const user = {
        name: "Василий Иванович",
        age: 35
    }
    
    const userJson = JSON.stringify(user)
    const userParse = JSON.parse(userJson)

    // console.log(userJson,  userParse)

}

//  2. Отфильтруйте анаграммы
{
    const room = {
        number: 23,
    };

    const meetup = {
        title: "Совещание",
        occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
        place: room,
    };

    room.occupiedBy = meetup;
    meetup.self = meetup;

    console.log(
        JSON.stringify(meetup, function replacer(key, value) {
            return key != "" && value == meetup ? undefined : value;
        })
    );
}


