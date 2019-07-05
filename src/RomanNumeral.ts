import { RomanNumeralEnum } from './RomanNumeralEnum';

export class RomanNumeral {

    constructor(
        public numeralEnum: RomanNumeralEnum,
        public value: number,
    ) {
    }

    public static _I: RomanNumeral = new RomanNumeral(RomanNumeralEnum.I, 1);
    public static _V: RomanNumeral = new RomanNumeral(RomanNumeralEnum.V, 5);
    public static _X: RomanNumeral = new RomanNumeral(RomanNumeralEnum.X, 10);
    public static _L: RomanNumeral = new RomanNumeral(RomanNumeralEnum.L, 50);
    public static _C: RomanNumeral = new RomanNumeral(RomanNumeralEnum.C, 100);
    public static _D: RomanNumeral = new RomanNumeral(RomanNumeralEnum.D, 500);
    public static _M: RomanNumeral = new RomanNumeral(RomanNumeralEnum.M, 1000);

    public static RomanNumerals: RomanNumeral[] = [
        RomanNumeral._I,
        RomanNumeral._V,
        RomanNumeral._X,
        RomanNumeral._L,
        RomanNumeral._C,
        RomanNumeral._D,
        RomanNumeral._M,
    ];

    public static fromNumeralEnum(numeralEnum: RomanNumeralEnum): RomanNumeral {
        switch (numeralEnum) {
            case RomanNumeralEnum.I: return RomanNumeral._I;
            case RomanNumeralEnum.V: return RomanNumeral._V;
            case RomanNumeralEnum.X: return RomanNumeral._X;
            case RomanNumeralEnum.L: return RomanNumeral._L;
            case RomanNumeralEnum.C: return RomanNumeral._C;
            case RomanNumeralEnum.D: return RomanNumeral._D;
            case RomanNumeralEnum.M: return RomanNumeral._M;
        }
    }

    static isEqual(numeral1: RomanNumeralEnum, numeral2: RomanNumeralEnum): boolean {
        return RomanNumeral.fromNumeralEnum(numeral1).value === RomanNumeral.fromNumeralEnum(numeral2).value;
    }

    static isLess(numeral1: RomanNumeralEnum, numeral2: RomanNumeralEnum): boolean {
        return RomanNumeral.fromNumeralEnum(numeral1).value < RomanNumeral.fromNumeralEnum(numeral2).value;
    }
}