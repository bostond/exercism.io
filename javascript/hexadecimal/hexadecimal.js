var Hexadecimal = function(hexadecimal) {
    return toInt(hexadecimal, 16);
}

var toInt = function toInt(number, base){
    return {
        toDecimal: function() {
            try {
                var digits = number.split("").map(function (digit) {
                    var int = parseInt(digit, base);
                    if (isNaN(int)) {
                        throw "Not a number: " + digit;
                    } else {
                        return int;
                    }
                });
            } catch (e) {
                return 0;
            }
            return convert(digits, 1, 0);
        }
    }
    function convert(digits, place, accumlator) {
        if (digits.length === 0) {
            return accumlator;
        }
        return convert(digits, base * place, accumlator + (digits.pop() * place));
    }
}

module.exports = Hexadecimal;