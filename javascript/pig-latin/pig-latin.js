var piglatin = function piglatin() {
    var vowels = "aeiouy".split("");

    // special cases. If any of these sequences match, move entire match to the end of the word and tack on "ay".
    var specialCaseMatches = [
        /^([a-zA-Z]qu)/,
        /^([a-zA-Z]?ch)/,
        /^(qu)/,
        /^(th[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]?)/
    ];

    var translateWord = function translateWord(word) {
        if (vowels.indexOf(word.charAt(0)) !== -1) {
            return word + "ay";
        } else {
            for (var i = 0; i < specialCaseMatches.length; i++) {
                if (specialCaseMatches[i].test(word)) {
                    var matched = specialCaseMatches[i].exec(word);
                    return word.replace(specialCaseMatches[i], "") + matched[0] + "ay";
                }
            }
            var letters = word.split("");
            var first = letters.shift();
            return letters.join("") + first + "ay";
        }
    }

    return {
        translate: function(phrase) {
            return  phrase.split(" ").map(function(word) {
                return translateWord(word);
            }).join(" ");
        }
    }
}

module.exports = piglatin();