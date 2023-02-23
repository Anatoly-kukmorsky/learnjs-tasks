'use strict'

//  1. Сделать первый символ заглавным
{
    const upperFirstLetter = (str) => str[0].toUpperCase() + str.slice(1)
    
    // console.log(upperFirstLetter('trim'));
}

//  2. Проверка на спам
{
    const checkSpam = (str) =>
        str.toLowerCase().includes("viagra") ||
        str.toLowerCase().includes("xxx") ||
        str.toLowerCase().includes("porn")
    

    // console.log(checkSpam("buy ViAgRA now"));
    // console.log(checkSpam("free xxxxx"));
    // console.log(checkSpam("inpornocent rabbit"));
}

//  3. Усечение строки
{
    const truncate = (str, maxlength) =>
        str.length <= maxlength ? str : `${str.slice(0, maxlength - 1)}...`;

    // console.log("...".codePointAt(0));
    // console.log(String.fromCodePoint(46));
    // console.log(truncate("abcdefghijklmnopqrstuvwxyz", 26));
}

//  4. Выделить число
{
    function extractCurrencyValue(str) {
        return +str.slice(1);
    }

    // console.log(extractCurrencyValue('$459'))
}
