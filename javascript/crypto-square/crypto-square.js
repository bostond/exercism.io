var Crypto = function Crypto(phrase) {
    return {
        normalizePlaintext : function() {
            var punctuation = [" ", ",", ".", "!", "?", ";", "#", "$", "%", "^", "&"];

            return phrase.toLowerCase().split("").filter(function (element) {
                // do not include spaces or punctuation.
                return (punctuation.indexOf(element) === -1)
            }).join("");
        },
        size : function() {
            return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
        },
        plaintextSegments : function() {
            var segments = [];
            var size = this.size();
            var normalized = this.normalizePlaintext().split("");

            for (var i = 0, row = 0 ;i < normalized.length; i+= size, row++) {
                segments[row] = (segments[row] || "") + normalized.slice(i, i+size).join("");
            }

            return segments;
        },
        ciphertext : function() {
          var seqments = this.plaintextSegments();
            var text = "";
            var size = seqments.length;
            for (var i = 0; i <= size; i++) {
                for (var j = 0; j < size; j++) {
                    if (seqments[j][i]) {
                        text += seqments[j][i];
                    }
                }
            }
            return text;
        },
        normalizeCiphertext : function() {
            var size = this.size();
            var normalizedCipherText = "";
            this.ciphertext().split("").forEach(function (element, index) {
                if (index && index % size === 0) {
                    normalizedCipherText += " " + element;
                } else {
                    normalizedCipherText += element;
                }
            });
            return normalizedCipherText;
        }
    }
}

module.exports = Crypto;