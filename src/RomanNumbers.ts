import { RomanNumeral } from './RomanNumeral';

export class RomanNumbers {

    static read(roman: string): number {
        if (roman.length === 1) {
            return RomanNumeral.fromNumeralChar(roman).value;
        } else {
            let result = RomanNumbers.read(roman[0]);
            for (let i = 1; i < roman.length; i++) {
                const previousChar = roman[i-1];
                const previousNumeral = RomanNumeral.fromNumeralChar(previousChar);
                const char = roman[i];
                const numeral = RomanNumeral.fromNumeralChar(char);

                if (RomanNumeral.isLess(previousNumeral.numeralEnum, numeral.numeralEnum)) {
                    result -= previousNumeral.value;
                    result += numeral.value - previousNumeral.value;
                } else {
                    result += numeral.value;
                }
            }
            return result;
        }
        return 0;
    }
}
