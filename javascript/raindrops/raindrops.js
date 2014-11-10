var primeFactors = require("../prime-factors/prime-factors.js");

var Raindrops = function() {
    return {
        convert: function(integer) {
            var lookup = { 3: "Pling", 5: "Plang", 7: "Plong"};
            var primes = primeFactors.for(integer).filter(function(element, index, self) {
                // returns array of prime factors for the integer that are specifically 3, 5 and/or 7. Trims duplicates.
               return ((element === 3 || element === 5 || element === 7) && self.indexOf(element) === index)
            });

            var raindropSpeak = "";
            for (var i = 0; i < primes.length; i++) {
                raindropSpeak += lookup[primes[i]];
            }

            return (raindropSpeak.length === 0) ? "" + integer : raindropSpeak;
        }
    }
}

module.exports = Raindrops;