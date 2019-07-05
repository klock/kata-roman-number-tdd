import { RomanNumbers } from '../src/RomanNumbers';
import { RomanNumeral } from '../src/RomanNumeral';

describe('RomanNumbers', () => {

    it('read ', () => {
        expect(RomanNumbers.read('')).toBe(0);
    });

    describe('read one char:', () => {
        for (let numeral of RomanNumeral.RomanNumerals) {
            it(numeral.numeralEnum, () => {
                expect(RomanNumbers.read(numeral.numeralEnum)).toBe(numeral.value);
            });
        }
    });

    it('read II', () => {
        expect(RomanNumbers.read('II')).toBe(2);
    });

    it('read III', () => {
        expect(RomanNumbers.read('III')).toBe(3);
    });

    it('read IV', () => {
        expect(RomanNumbers.read('IV')).toBe(4);
    });

    it('read VI', () => {
        expect(RomanNumbers.read('VI')).toBe(6);
    });

    it('read VII', () => {
        expect(RomanNumbers.read('VII')).toBe(7);
    });

    it('read VIII', () => {
        expect(RomanNumbers.read('VIII')).toBe(8);
    });

    it('read IX', () => {
        expect(RomanNumbers.read('IX')).toBe(9);
    });

    it('read XI', () => {
        expect(RomanNumbers.read('XI')).toBe(11);
    });

    it('read XII', () => {
        expect(RomanNumbers.read('XII')).toBe(12);
    });

    it('read XIII', () => {
        expect(RomanNumbers.read('XIII')).toBe(13);
    });

    it('read XIV', () => {
        expect(RomanNumbers.read('XIV')).toBe(14);
    });

    it('read XV', () => {
        expect(RomanNumbers.read('XV')).toBe(15);
    });

    it('read XVI', () => {
        expect(RomanNumbers.read('XVI')).toBe(16);
    });

    it('read XVII', () => {
        expect(RomanNumbers.read('XVII')).toBe(17);
    });

    it('read XVIII', () => {
        expect(RomanNumbers.read('XVIII')).toBe(18);
    });

    it('read XIX', () => {
        expect(RomanNumbers.read('XIX')).toBe(19);
    });

    it('read XX', () => {
        expect(RomanNumbers.read('XX')).toBe(20);
    });

    it('read M CCC XXXX VII', () => {
        expect(RomanNumbers.read('MCCCXXXXVII')).toBe(1347);
    });

    it('read IC', () => {
        expect(RomanNumbers.read('IC')).toBe(99);
    });

    it('read IM', () => {
        expect(RomanNumbers.read('IM')).toBe(999);
    });

    it('read MMMMMMMMM XC', () => {
        expect(RomanNumbers.read('MMMMMMMMMXC')).toBe(9090);
    });

    it('read MM IXX', () => {
        expect(RomanNumbers.read('MMIXX')).toBe(2019);
    });

    it('read M CM LXXX VI', () => {
        expect(RomanNumbers.read('MCMLXXXVI')).toBe(1986);
    });

    it('read MMM DCCC LXXX VIII', () => {
        expect(RomanNumbers.read('MMMDCCCLXXXVIII')).toBe(3888);
    });


});
