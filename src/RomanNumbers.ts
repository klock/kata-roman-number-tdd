import { RomanNumeral } from './RomanNumeral';

export class RomanNumbers {

    static read(roman: string): number {
        const length = roman.length;

        if (length === 0) {
            return 0;
        } else {
            let result = RomanNumeral.fromNumeralChar(roman[0]).value;

            for (let i = 1; i < length; i++) {
                const previousChar = roman[i-1];
                const previousNumeral = RomanNumeral.fromNumeralChar(previousChar);
                const currentChar = roman[i];
                const currentNumeral = RomanNumeral.fromNumeralChar(currentChar);

                if (previousNumeral.isLess(currentNumeral)) {
                    // remove the previous char added on the last loop
                    result -= previousNumeral.value;
                    // add current char minus the previous one
                    result += currentNumeral.value - previousNumeral.value;
                } else {
                    result += currentNumeral.value;
                }
            }
            return result;
        }
    }
}
