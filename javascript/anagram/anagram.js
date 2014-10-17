function anagram(word) {

    var lcWord = word.toLowerCase();
    var wordCharacters= toSortedCharacterArray(lcWord);

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
        var lcPossibleAnagram = possibleAnagram.toLowerCase();

        if (! isSubstringCandidate(lcPossibleAnagram, lcWord)) {
            return false;
        }

        // sort the possible anagram alphabetically, and then compare to the base word,
        // which has also been sorted alphabetically, letter by letter.
        var lcPossibleAnagramArray = toSortedCharacterArray(lcPossibleAnagram);
        var match = true;
        lcPossibleAnagramArray.forEach(function(lcPossibleAnagramElement, index, array) {
            if ((!match) || wordCharacters[index] !== lcPossibleAnagramElement) {
                match = false;
            }
        });

        return match;
    }

    function toSortedCharacterArray(obj) {
        return obj.split("").sort();
    }

    // if the substring provided is equal to the mainstring being compared to, or if the substring is longer
    // the mainstring, then the substring is not a candidate to be an anagram.
    function isSubstringCandidate(substring, mainstring) {
        if (substring.length != mainstring.length) {
            return false;
        } else if (substring.length === mainstring.length && substring === mainstring) {
            return false;
        } else {
            return true;
        }
    }

    function isString(obj) {
        return (Object.prototype.toString.call(obj) === '[object String]');
    };
}

module.exports = anagram;