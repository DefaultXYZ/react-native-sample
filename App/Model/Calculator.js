'use strict';

export default class Calculator {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        this.c = this.a + this.b;
    }

    subtract() {
        this.c = this.a - this.b;
    }

    multiply() {
        this.c = this.a * this.b;
    }

    divide() {
        this.c = this.a / this.b;
    }
}