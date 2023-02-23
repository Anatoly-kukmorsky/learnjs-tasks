'use strict'

//  1. Можно ли добавить свойство строке?
{
    let str = "Привет";

    str.test = 5;

    alert(str.test);
    
    // 1. Ошибка (strict mode) 2. undefined (без strict)
}
