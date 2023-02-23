"use strict";

//  1. Создайте дату
{
    let date = new Date(2012, 1, 20, 3, 12);
    // console.log(date)
}

//  2. Покажите день недели
{
    const getWeekDay = (date) => {
        let days =
            ["Восресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

        return days[date.getDay()];
    };

    let date = new Date(2015, 11, 4);
    // console.log(getWeekDay(date));
}

//  3. День недели в европейской нумерации
{
     const getLocalDay = (date) => {
         let days = [7, 1, 2, 3, 4, 5, 6];
         return days[date.getDay()];
     };
    
    let date = new Date(2012, 0, 3);
    // console.log(getLocalDay(date));
}

//  4. Какой день месяца был много дней назад?
{
    const getDateAgo = (date, days) => {
        let dateCopy = new Date(date);

        dateCopy.setDate(date.getDate() - days);
        return dateCopy.getDate();
    }

    let date = new Date(2020, 8, 8)

    // console.log(getDateAgo(date, 10))
}

//  5. Последнее число месяца?
{
    const getLastDayOfMonth = (year, month) => {
        let date = new Date(year, month + 1, 0);
        return date.getDate();
    }

    // console.log(getLastDayOfMonth(2024, 1))
}

//  6. Сколько сегодня прошло секунд?
{
    const getSecondsToday = () => {
        let day = new Date();

        // создаём объект с текущими днём/месяцем/годом
        let today = new Date(day.getFullYear(), day.getMonth(), day.getDate());

        let diff = day - today; // разница в миллисекундах
        return Math.round(diff / 1000); // получаем секунды
    }

    // console.log(getSecondsToday())
}

//  7. Сколько секунд осталось до завтра?
{
    function getSecondsToTomorrow() {
        let date = new Date();

        // завтрашняя дата
        let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);

        let diff = tomorrow - date; // разница в миллисекундах
        return Math.round(diff / 1000); // преобразуем в секунды
    }

    // console.log(getSecondsToTomorrow())
}

//  8. Форматирование относительной даты
{
    const formatDate = (date) => {
        let diff = new Date() - date; // разница в миллисекундах

        if (diff < 1000) {
            // меньше 1 секунды
            return "прямо сейчас";
        }

        let ss = (Math.floor(diff / 1000)); // разница в секундах

        if (ss < 60) {
            return ss + " сек. назад";
        }

        let mm = Math.floor(diff / 60000); // разница в минутах
        if (mm < 60) {
            return mm + " мин. назад";
        }

        // отформатировать дату
        // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
        date = [
            date.getDate().toString().padStart(2, "0"),
            (date.getMonth() + 1).toString().padStart(2, "0"),
            date.getFullYear(),
            date.getHours().toString().padStart(2, "0"),
            date.getMinutes().toString().padStart(2, "0"),
        ];

        // соединить компоненты в дату
        return date.slice(0, 3).join(".") + " " + date.slice(3).join(":");
    }

    // console.log(formatDate((new Date(new Date - 1000))))
    // console.log(formatDate(new Date(new Date() - 30 * 1000)));
    // console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
    // console.log(formatDate(new Date(new Date() - 86400 * 1000)));
}
