function toRoman(number) {
    var numeralConversion = [
        { roman : 'M', numeric: 1000 },
        { roman : 'CM', numeric: 900 },
        { roman : 'D', numeric: 500 },
        { roman : 'CD', numeric: 400 },
        { roman : 'C', numeric: 100 },
        { roman : 'XC', numeric: 90 },
        { roman : 'L', numeric: 50 },
        { roman : 'XL', numeric: 40 },
        { roman : 'X', numeric: 10 },
        { roman : 'IX', numeric: 9 },
        { roman : 'V', numeric: 5},
        { roman : 'IV', numeric: 4},
        { roman : 'I', numeric: 1}
    ];

    var convert = function(stack, integer, accumulator) {
        if (integer === 0) {
            return accumulator;
        } else {
            if (integer >= stack[0].numeric) {
                return convert(stack, integer - stack[0].numeric, accumulator + stack[0].roman);
            } else {
                return convert(stack.slice(1), integer, accumulator);
            }
        }
    };

    return convert(numeralConversion, number, "");
}
module.exports = toRoman;