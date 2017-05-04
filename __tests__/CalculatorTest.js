'use strict';

import Calculator from "../App/Model/Calculator";

describe('Calculator', () => {
    let calc;

    describe('Simple numbers', () => {
        beforeEach(() => {
            calc = new Calculator(6, 2);
        });

        it('should add two numbers', () => {
            calc.add();
            expect(calc.c).toBe(8);
        });

        it('should subtract two numbers', () => {
            calc.subtract();
            expect(calc.c).toBe(4);
        });

        it('should multiply two numbers', () => {
            calc.multiply();
            expect(calc.c).toBe(12);
        });

        it('should divide two numbers', () => {
            calc.divide();
            expect(calc.c).toBe(3);
        });
    });

    describe('Numbers with floating point', () => {
        beforeEach(() => {
            calc = new Calculator(6.6, 3);
        });

        it('should add two numbers with floating point', () => {
            calc.add();
            expect(calc.c).toBeCloseTo(9.6, 1);
        });

        it('should subtract two numbers with floating point', () => {
            calc.subtract();
            expect(calc.c).toBeCloseTo(3.6, 1);
        });

        it('should multiply two numbers with floating point', () => {
            calc.multiply();
            expect(calc.c).toBeCloseTo(19.8, 1);
        });

        it('should divide two numbers with floating point', () => {
            calc.divide();
            expect(calc.c).toBeCloseTo(2.2, 1);
        });
    });

    describe('Non-numeric values', () => {
        it('should throw error on undefined number', () => {
            expect(() => {
                calc = new Calculator(undefined, 4);
            }).toThrow('Value is undefined');
        });

        it('should throw error on null', () => {
            expect(() => {
                calc = new Calculator(null, 4);
            }).toThrow('Value is undefined');
        });

        it('should throw error on non-numeric value', () => {
            expect(() => {
                calc = new Calculator('Hello', 4);
            }).toThrow('Value is non-numeric');
        });
    });
});