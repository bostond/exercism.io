function Grains() {
    return {
        square: (function () {
            // memoization optimization. JavaScript: The Good Parts, section 4.15.
            var memo = [0, 1];
            var squares = function(squareNumber) {
                var result = memo[squareNumber];
                if (typeof result !== 'number') {
                    result = 2 * squares(squareNumber - 1);
                    memo[squareNumber] = result;
                }
                return result;
            }
            return squares;
        }()),
        total : function() {
            var total = 0;
            for (var i = 1; i < 65; i++) {
                total += this.square(i);
            }
            return total;
        }
    }
}

module.exports = Grains;