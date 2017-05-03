'use strict';

import Calculator from "../App/Model/Calculator";

describe('Calculator', () => {
    let calc;

    it('should add two numbers', () => {
        calc = new Calculator(2, 3);
        calc.add();
        expect(calc.c).toBe(5);
    });

    it('should subtract two numbers', () => {
        calc = new Calculator(5, 3);
        calc.subtract();
        expect(calc.c).toBe(2);
    });

    it('should multiply two numbers', () => {
        calc = new Calculator(2, 3);
        calc.multiply();
        expect(calc.c).toBe(6);
    });

    it('should divide two numbers', () => {
        calc = new Calculator(6, 3);
        calc.divide();
        expect(calc.c).toBe(2);
    });

    it('should add two numbers with floating point', () => {
        calc = new Calculator(2.5, 3);
        calc.add();
        expect(calc.c).toBeCloseTo(5.5, 1);
    });

    it('should subtract two numbers with floating point', () => {
        calc = new Calculator(5, 3.4);
        calc.subtract();
        expect(calc.c).toBeCloseTo(1.6, 1);
    });

    it('should multiply two numbers with floating point', () => {
        calc = new Calculator(2.2, 3);
        calc.multiply();
        expect(calc.c).toBeCloseTo(6.6, 1);
    });

    it('should divide two numbers with floating point', () => {
        calc = new Calculator(6.6, 2);
        calc.divide();
        expect(calc.c).toBeCloseTo(3.3, 1);
    });
});