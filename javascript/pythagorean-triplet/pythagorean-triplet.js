var Pythagorean = function Pythagorean(a, b, c) {
    return {
        sum: function() {
            return a + b + c;
        },
        product: function() {
            return a * b * c;
        },
        isPythagorean: function() {
            return (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow (c, 2));
        }
    }
}

Pythagorean.where = function(constraints) {
    var triplets = [];

    for (var a = constraints.minFactor || 1; a <= constraints.maxFactor; a++) {
        for (var b = a+1; b <= constraints.maxFactor; b++) {
            for (var c = b+1; c <= constraints.maxFactor; c++) {
                var trip = Pythagorean(a,b,c);
                if (trip.isPythagorean() && (! constraints.sum || trip.sum() === constraints.sum))  {
                    triplets.push(trip);
                }
            }
        }
    }
    return triplets;
}

module.exports = Pythagorean;