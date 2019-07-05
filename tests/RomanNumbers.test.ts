import { RomanNumbers } from '../src/RomanNumbers';

describe('RomanNumbers', () => {
    it('read \'I\'', () => {
        expect(RomanNumbers.read('I')).toBe(1);
    });

    it('read \'II\'', () => {
        expect(RomanNumbers.read('II')).toBe(2);
    });

    it('read \'III\'', () => {
        expect(RomanNumbers.read('III')).toBe(3);
    });
});
