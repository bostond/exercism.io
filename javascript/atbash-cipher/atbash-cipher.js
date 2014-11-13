var atbash = function() {
    return {
        encode: function(phrase) {
            var punctuation = [" ", ",", ".", "!", "?", ";"];

            return phrase.split("").filter(function (element) {
                // do not include spaces or punctuation.
                return (punctuation.indexOf(element) === -1)
            }).map(function (element, index) {
                var charCode = element.toLowerCase().charCodeAt(0);
                var encodedCharString = (index && index % 5 === 0) ? " ": "";

                if (charCode >= 48 && charCode <= 57)  {
                    // do not encode numbers
                    return encodedCharString + element;
                } else {
                    // encode everything else
                    return encodedCharString + String.fromCharCode(97 + (122 - element.toLowerCase().charCodeAt(0)));
                }

            }).join("");
        }
    }
}

module.exports = atbash();