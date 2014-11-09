var prime = function() {
    return {
        for : function(number) {
            return  trampoline(function find(number, factor, factors) {
                if (number === 1 || factor > number) {
                    return factors;
                } else if (number % factor === 0) {
                    factors.push(factor);
                    return function () {
                        return find(number / factor, factor, factors);
                    }
                } else {
                    return function () {
                        return find(number, factor + 1, factors);
                    }
                }
            }, number, 2, []);
        }
    }

    function trampoline(fun /*, args */) {
        var result = fun.apply(fun, tail(arguments));

        while (isFunction(result)) {
            result = result();
        }

        return result;
    };

    function tail(array, n, guard) {
        return Array.prototype.slice.call(array, n == null || guard ? 1 : n);
    };

    function isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
    };



}



module.exports = prime();