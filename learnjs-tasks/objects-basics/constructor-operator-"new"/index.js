"use strict";

//  1. Две функции - один объект
{
    const Anna = {};

    function Billy() { return Anna }
    function Garry() { return Anna }

    // console.log( new Billy() === new Garry()) // true
}

//  2.Создайте калькулятор
{
    function Calculator() {
        
        this.sum = () => {
            return `Сумма чисел: ${this.a + this.b}`
        };

        this.mul = () => {
            return `Произведение чисел: ${this.a * this.b}`
        };

        this.exp = () => {
            return `${this.a} в степени ${this.b}: ${this.a ** this.b}`
        };

        this.read = () => {
            this.a = +prompt('Первое число', 0)
            this.b = +prompt('Второе число', 0)
        };
    }

    const calculator = new Calculator()

    // calculator.read()
    // console.log(`${calculator.sum()}\n${calculator.mul()}\n${calculator.exp()}`);
}

//  3. Создайте new Accumulator
{
    function Accumulator(startingValue) {
        this.value = startingValue;

        this.read = () => {
            this.value += +prompt("Сколько нужно добавить?", 0)
        };
    }

    let accumulator = new Accumulator(6)

    // accumulator.read() 
    // accumulator.read()
    // console.log(accumulator.value)
}

