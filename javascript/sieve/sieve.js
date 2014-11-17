var Sieve = function Sieve(number) {

    var primeList = [];
    var compositeList = [];

    function findPrimes(next) {
        if (next === number) {
            return;
        } else {
            if (compositeList.indexOf(next) === -1) {
                if (isPrime(next)) {
                    primeList.push(next);
                    for (var i = next; i < number; i *= next) {
                        compositeList.push(i);
                    }
                }
            }
            findPrimes(next + 1);
        }
    }

    findPrimes(2);

    function isPrime(candidate) {
        var disqualifiedAsPrime = false;
        for (var i = 2; i < candidate; i++) {
            if (candidate % i === 0) {
                disqualifiedAsPrime = true;
            }
        }
        return ! disqualifiedAsPrime;
    }

    return {
        primes : primeList
    }
}

module.exports = Sieve;