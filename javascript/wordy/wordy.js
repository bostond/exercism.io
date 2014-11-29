var ArgumentError = function ArgumentError() {
    return {}
}

var WordProblem = function WordProblem(question) {
    var operators = {
        plus : function(x,y) {
            return x + y;
        },
        divided : function(x,y) {
            return x / y;
        },
        multiplied : function (x,y) {
            return x * y;
        },
        minus : function (x, y) {
            return x - y;
        }
    }

    return {
        answer: function() {
            if (! /^What is.*\?$/.test(question)) {
                throw new ArgumentError();
            }

            var minusPleasantries = question.substr(8, question.length -1 );
            var components = [];
            minusPleasantries.split(" ").forEach(function (element) {
                if (element === 'by') {
                    return;
                }

                if (element.match(/\d+/)) {
                    components.push(parseInt(element));
                } else {
                    var operand = operators[element];
                    if (operand === undefined) {
                        throw new ArgumentError();
                    }
                    components.push(operators[element]);
                }
            });

            var reduceTerms = function reduceTerms(components) {
                if (components.length === 1) {
                    return components[0];
                } else {
                    var term1 = components.shift();
                    var operand = components.shift();
                    var term2 = components.shift();
                    components.unshift(operand(term1, term2));
                    return reduceTerms(components);
                }
            }

            return reduceTerms(components);
        }
    }
}

module.exports = {
    WordProblem : WordProblem,
    ArgumentError : ArgumentError
};