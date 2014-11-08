var Binary = function(decimal) {
    return {
        toDecimal: function() {
            try {
                var digits = decimal.split("").map(function (digit) {
                    var int = parseInt(digit, 10);
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
        return convert(digits, 2 * place, accumlator + (digits.pop() * place));
    }
}

module.exports = Binary;