"use strict";

//  1. Использование "this" в литерале объекта
{
    // function makeUser() {
    //     return {
    //         name: "John",
    //         ref: this,
    //     }
    // }

    // let user = makeUser()

    // alert(user.ref.name) // undefined

    // function makeUser() {
    //     return {
    //         name: "John",
    //         ref() {
    //             return this
    //         },
    //     }
    // }

    // let user = makeUser()

    // console.log(user.ref().name) // John
}

//  2.Создайте калькулятор
{
    const calculator = {
        sum() {
            return `Сумма чисел: ${this.a + this.b}`
        },

        mul() {
            return `Произведение чисел: ${this.a * this.b}`
        },

        exp() {
            return `${this.a} в степени ${this.b}: ${this.a ** this.b}`
        },

        read() {
            this.a = +prompt('Первое число', 0)
            this.b = +prompt('Второе число', 0)
        },
    }

    // calculator.read()
    // alert(calculator.sum())
    // alert(calculator.mul())
    // alert(calculator.exp())
}

//  3. Цепь вызовов
{
    let ladder = {
        step: 0,
        up() {
            this.step++
            return this.showStep()
        },
        down() {
            this.step--
            return this.showStep()
        },
        showStep() {
            console.log(this.step)
            return this
        },
    }

    // ladder.up().down().up().down().up().down().up().down()
}
