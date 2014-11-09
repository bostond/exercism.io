var prime = function() {

    return {
        for : function(number) {
            return find(number, 2, []);
        }
    }

    function find(number, factor, factors) {
        if (number === 1 || factor > number) {
            return factors;
        } else if (number % factor === 0) {
            factors.push(factor);
            return find(number / factor, factor, factors);
        } else {
            return find(number, factor + 1, factors);
        }
    }

}

module.exports = prime();