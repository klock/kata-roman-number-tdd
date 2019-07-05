import { RomanNumeral } from '../src/RomanNumeral';
import { RomanNumeralEnum } from '../src/RomanNumeralEnum';

describe('RomanNumeralEnum', () => {

    describe('I', () => {
        describe('is less than', () => {
            it('V', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.I, RomanNumeralEnum.V)).toBeTruthy();
            });

            it('X', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.I, RomanNumeralEnum.X)).toBeTruthy();
            });

            it('L', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.I, RomanNumeralEnum.L)).toBeTruthy();
            });

            it('C', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.I, RomanNumeralEnum.C)).toBeTruthy();
            });

            it('D', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.I, RomanNumeralEnum.D)).toBeTruthy();
            });

            it('M', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.I, RomanNumeralEnum.M)).toBeTruthy();
            });
        });
    });

    describe('V', () => {
        describe('is more than', () => {
            it('I', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.V, RomanNumeralEnum.I)).toBeFalsy();
            });
        });

        describe('is less than', () => {
            it('X', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.V, RomanNumeralEnum.X)).toBeTruthy();
            });

            it('L', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.V, RomanNumeralEnum.L)).toBeTruthy();
            });

            it('C', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.V, RomanNumeralEnum.C)).toBeTruthy();
            });

            it('D', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.V, RomanNumeralEnum.D)).toBeTruthy();
            });

            it('M', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.V, RomanNumeralEnum.M)).toBeTruthy();
            });
        });
    });

    describe('X', () => {
        describe('is more than', () => {
            it('I', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.X, RomanNumeralEnum.I)).toBeFalsy();
            });

            it('V', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.X, RomanNumeralEnum.V)).toBeFalsy();
            });
        });

        describe('X is less than', () => {
            it('L', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.X, RomanNumeralEnum.L)).toBeTruthy();
            });

            it('C', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.X, RomanNumeralEnum.C)).toBeTruthy();
            });

            it('D', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.X, RomanNumeralEnum.D)).toBeTruthy();
            });

            it('M', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.X, RomanNumeralEnum.M)).toBeTruthy();
            });
        });
    });

    describe('L', () => {
        describe('is more than', () => {
            it('I', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.L, RomanNumeralEnum.I)).toBeFalsy();
            });

            it('V', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.L, RomanNumeralEnum.V)).toBeFalsy();
            });

            it('X', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.L, RomanNumeralEnum.X)).toBeFalsy();
            });
        });

        describe('is less than', () => {
            it('C', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.L, RomanNumeralEnum.C)).toBeTruthy();
            });

            it('D', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.L, RomanNumeralEnum.D)).toBeTruthy();
            });

            it('M', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.L, RomanNumeralEnum.M)).toBeTruthy();
            });
        });
    });

    describe('C', () => {
        describe('is more than', () => {
            it('I', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.C, RomanNumeralEnum.I)).toBeFalsy();
            });

            it('V', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.C, RomanNumeralEnum.V)).toBeFalsy();
            });

            it('X', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.C, RomanNumeralEnum.X)).toBeFalsy();
            });

            it('L', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.C, RomanNumeralEnum.L)).toBeFalsy();
            });
        });

        describe('is less than', () => {
            it('D', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.C, RomanNumeralEnum.D)).toBeTruthy();
            });

            it('M', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.C, RomanNumeralEnum.M)).toBeTruthy();
            });
        });
    });

    describe('D', () => {
        describe('is more than', () => {
            it('I', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.D, RomanNumeralEnum.I)).toBeFalsy();
            });

            it('V', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.D, RomanNumeralEnum.V)).toBeFalsy();
            });

            it('X', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.D, RomanNumeralEnum.X)).toBeFalsy();
            });

            it('L', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.D, RomanNumeralEnum.L)).toBeFalsy();
            });

            it('C', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.D, RomanNumeralEnum.C)).toBeFalsy();
            });
        });
        describe('is less than', () => {
            it('M', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.D, RomanNumeralEnum.M)).toBeTruthy();
            });
        });
    });

    describe('M', () => {
        describe('is more than', () => {
            it('I', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.M, RomanNumeralEnum.I)).toBeFalsy();
            });

            it('V', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.M, RomanNumeralEnum.V)).toBeFalsy();
            });

            it('X', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.M, RomanNumeralEnum.X)).toBeFalsy();
            });

            it('L', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.M, RomanNumeralEnum.L)).toBeFalsy();
            });

            it('C', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.M, RomanNumeralEnum.C)).toBeFalsy();
            });

            it('D', () => {
                expect(RomanNumeral.isLess(RomanNumeralEnum.M, RomanNumeralEnum.D)).toBeFalsy();
            });
        });
    });
});
