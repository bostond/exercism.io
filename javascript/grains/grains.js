function Grains() {
    return {
        square: function(squareNumber) {
            if (squareNumber === 1) {
                return 1;
            } else {
                return 2 * this.square(squareNumber - 1);
            }
        },
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