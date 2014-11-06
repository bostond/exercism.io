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

    var accumulator = "";
    numeralConversion.forEach(function (conversion) {
        while (number >= conversion.numeric) {
            accumulator += conversion.roman;
            number -= conversion.numeric;
        }
    });

    return accumulator;
}
module.exports = toRoman;