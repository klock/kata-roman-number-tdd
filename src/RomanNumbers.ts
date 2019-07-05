import { RomanNumeral } from './RomanNumeral';
import { RomanNumeralEnum } from './RomanNumeralEnum';

export class RomanNumbers {

    static read(roman: string): number {
        if (roman.length === 1) {
            return RomanNumeral.fromNumeralEnum(<RomanNumeralEnum>roman).value;
        } else {
            let result = 0;
            for (let char of roman) {
                result += RomanNumbers.read(char);
            }
            return result;
        }
        return 0;
    }
}
