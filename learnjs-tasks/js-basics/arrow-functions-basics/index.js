"use strict";

//  1. Перепишите с использованием функции-стрелки
{
    function ask1(question, yes, no) {
        if (confirm(question)) yes()
        else no()
    }

    // ask1(
    //     "Вы согласны?",
    //     function () { alert("Вы согласились.") },
    //     function () { alert("Вы отменили выполнение.") }
    // )

    function ask2(question, yes, no) {
        confirm(question) ? yes() : no()
    }

    // ask2(
    //     "Вы согласны",
    //     () => alert("Вы согласились"),
    //     () => alert("Вы отменили выполнение")
    // )
}
