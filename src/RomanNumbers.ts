export class RomanNumbers {
  static read(roman: string) {
    if (roman.length === 1) {
      if (roman === 'I') {
        return 1;
      }
    } else {
      let result = 0;
      for (let char of roman) {
        result += RomanNumbers.read(char)
      }
      return result;
    }
    return 0;
  }
}
