var atbash = function() {
    return {
        encode: function(phrase) {
            var count = 0;
            var punctuation = [" ", ",", "."];

            return phrase.split("").map(function (element) {
                if (punctuation.indexOf(element) !== -1) {
                    return "";
                }

                var charCode = element.toLowerCase().charCodeAt(0);
                var encodedCharString = (count && count % 5 === 0) ? " ": "";
                count++;
                if (charCode >= 48 && charCode <= 57)  {
                    return encodedCharString + element;
                } else {
                    return encodedCharString + String.fromCharCode(97 + (122 - element.toLowerCase().charCodeAt(0)));
                }

            }).join("");
        }
    }
}

module.exports = atbash();