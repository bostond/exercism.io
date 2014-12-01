var Series = function Series(stringOfDigits) {
    var digits = (stringOfDigits) ? stringOfDigits.split("").map( function (element) {
        return parseInt(element);
    }) : [];
    return {
        get digits () {
            return digits;
        },
        slices : function(number) {
            if (number > digits.length) {
                throw "Slice size is too big.";
            }
            var sliced = [];
            for (var i = 0; (i < digits.length && i+number <= digits.length); i++) {
                sliced.push(digits.slice(i, i+number));
            }
            return sliced;
        },
        largestProduct : function(number) {
            if (digits.length === 0) {
                return 1;
            }
            var product = function product(array, accumulator) {
                if (array.length === 0) {
                    return accumulator;
                } else {
                    accumulator = (array.pop() * accumulator);
                    return product(array, accumulator);
                }
            }

            var largest = 0;
            this.slices(number).forEach(function (array) {
                var prod = product(array, array.pop());
                if (prod > largest) {
                    largest = prod;
                }
            })  ;

            return largest;
        }
    }
}

module.exports = Series;