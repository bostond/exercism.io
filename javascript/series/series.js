var Series = function Series(number){

    var digits = "".concat(number).split("").map(function(element) { return parseInt(element) });

    return {
        digits : digits,
        slices : function(sliceNumber) {
            var sliced = [];
            if (sliceNumber > digits.length) {
                throw "Slice size is too big.";
            }
            for (var i = 0; i < digits.length; i++) {
                if (digits.length >= i + sliceNumber) {
                    sliced.push(digits.slice(i, i+sliceNumber));
                }
            }
            return sliced;
        }
    }
}

module.exports = Series;