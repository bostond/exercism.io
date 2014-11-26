var Squares = function Squares(number) {
    var numbers = [];
    for (var i = 0; i <= number; i++) {
        numbers.push(i);
    }

    var squareOfSums = square(numbers.reduce(sum));
    var sumOfSquares = numbers.map(square).reduce(sum);
    var difference = squareOfSums - sumOfSquares;

    function square(num) {
        return num * num;
    }

    function sum(x, y) {
        return x + y
    }

    return {
        squareOfSums : squareOfSums,
        sumOfSquares: sumOfSquares,
        difference: difference
    }
}

module.exports = Squares;