'use strict';

export default class Calculator {

    constructor(a, b) {
        if (Calculator.isNullValues(a, b)) {
            throw new TypeError('Value is undefined');
        }

        if (Calculator.isNonNumeric(a, b)) {
            throw new TypeError('Value is non-numeric');
        }
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

    static isNullValues(a, b) {
        return a === null || b === null ||
            a === undefined || b === undefined;
    }

    static isNonNumeric(a, b) {
        return isNaN(a) || isNaN(b);
    }
}