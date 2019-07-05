import { RomanNumbers } from '../src/RomanNumbers';
import { RomanNumeral } from '../src/RomanNumeral';

describe('RomanNumbers', () => {
    describe('read one char:', () => {
        for (let numeral of RomanNumeral.RomanNumerals) {
            it(numeral.numeralEnum, () => {
                expect(RomanNumbers.read(numeral.numeralEnum)).toBe(numeral.value);
            });
        }
    });

    it('read \'II\'', () => {
        expect(RomanNumbers.read('II')).toBe(2);
    });

    it('read \'III\'', () => {
        expect(RomanNumbers.read('III')).toBe(3);
    });

    it('read \'IV\'', () => {
        expect(RomanNumbers.read('IV')).toBe(4);
    });

    it('read \'VI\'', () => {
        expect(RomanNumbers.read('VI')).toBe(6);
    });
});
