function anagram(word) {

    var wordRegex = new RegExp("^" + word + "$", "i");
    var sortedLowercaseWord = toSortedLowercase(word);

    var isArray = Array.isArray || function(obj) {
        return ObjProto.toString.call(obj) === '[object Array]';
    };

    return {

        matches : function() {
            var options = processArguments(arguments);
            var anagrams = [];

            options.forEach(function(option) {
                if (isAnagram(option)) {
                    anagrams.push(option);
                }
            });

            return anagrams;
        }
    }

    /*
     *   Process the arguments passed to the matches function - to allow any number of strings, or arrays of
     *  strings, to be passed as arguments.
     */
    function processArguments(argumentsToProcess) {
        var options = [];
        for (var i = 0; i < argumentsToProcess.length; i++) {
            if (isArray(argumentsToProcess[i])) {
                argumentsToProcess[i].slice().forEach(function (element) {
                    options.push(element);
                });
            } else if( isString(argumentsToProcess[i])) {
                options.push(argumentsToProcess[i]);
            } // ignore anything else
        }
        return options;
    }

    function isAnagram(possibleAnagram) {
        if (wordRegex.test(possibleAnagram)) {
            return false;
        }

        return (toSortedLowercase(possibleAnagram) === sortedLowercaseWord);
    }

    function toSortedLowercase(string) {
        return string.toLowerCase().split("").sort().join("");
    }

    function isString(obj) {
        return (Object.prototype.toString.call(obj) === '[object String]');
    };
}

module.exports = anagram;