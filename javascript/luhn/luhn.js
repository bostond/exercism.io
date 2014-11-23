var Luhn = function Luhn(digit) {

    var digits = "".concat(digit).split("").map(function(element) { return parseInt(element) });

    var checkDigit = digits[digits.length - 1];
    var addends = [checkDigit.length];
    for (var i = digits.length - 1, index = 0 ; i >= 0;  i--, index++ ) {
        if (index && (index+1) % 2 === 0) {
            addends[i] = (digits[i] * 2 > 9) ? digits[i] * 2 - 9 : digits[i] * 2;
        } else {
            addends[i] = digits[i];
        }
    }
    var checksum = addends.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    });

    return {
        checkDigit: checkDigit,
        addends: addends,
        checksum:  checksum,
        valid: (checksum % 10 === 0)
    }

}

Luhn.create = function(num) {
    var next = num * 10;
    var luhn = new Luhn(next);
    var sum = luhn.checksum * 9;
    next += (sum % 10);

    return next;
}

module.exports = Luhn;