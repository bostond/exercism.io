function toRoman(number) {
    var convert = function convert(integer, accumlator) {
        if (integer === 0) {
            return accumlator;
        }

        if (integer >= 1000) {
            return convert(integer - 1000, accumlator + "M");
        } else if (integer >= 900) {
            return convert(integer-900, accumlator + "CM")
        } else if (integer >= 500) {
            return convert(integer-500, accumlator + "D")
        } else if (integer >= 400) {
            return convert(integer-400, accumlator + "CD")
        } else if (integer >= 100) {
            return convert(integer-100, accumlator + "C")
        } else if (integer >= 90) {
            return convert(integer-90, accumlator + "XC")
        } else if (integer >= 50) {
            return convert(integer-50, accumlator + "L")
        } else if (integer >= 40) {
            return convert(integer-40, accumlator + "XL")
        } else if (integer >= 10) {
            return convert(integer-10, accumlator + "X")
        } else if (integer == 9) {
            return convert(integer-9, accumlator + "IX")
        } else if (integer >= 5 && integer <= 8) {
            return convert(integer-5, accumlator + "V")
        } else if (integer == 4) {
            return convert(integer-4, accumlator + "IV")
        } else {
            return convert(integer-1, accumlator + "I")
        }
    }

    return convert(number, "");
}
module.exports = toRoman;