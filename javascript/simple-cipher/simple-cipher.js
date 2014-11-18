var Cipher = function Cipher(key) {

    if (Object.prototype.toString.call(key) === '[object String]') {
        validate(key);
    }

    var validChars = "abcdefghijklmnopqrstuvwxyz".split("");
    var cipherKey = key || generateKey(100, validChars);
    validate(cipherKey);

    function validate(key) {
        if (! /^[a-z]+$/.test(key)) {
            throw "Bad key";
        }
    }

    function generateKey(length) {
        var key = [];
        for (var i = 0; i < length; i++) {
            key.push(validChars[Math.round(Math.random() * (validChars.length - 1))]);
        }
        return key.join("");
    }


    return {
        key: cipherKey,
        encode: function(phrase) {
            var encoded = [];
            var encodedCharIndex = 0;
            for (var i = 0; i < phrase.length; i++) {
                encodedCharIndex = validChars.indexOf(phrase[i]) + validChars.indexOf(cipherKey[i]);
                if (encodedCharIndex >= validChars.length) {
                    encodedCharIndex -= validChars.length;
                }
                encoded.push( validChars[encodedCharIndex]);
            }
            return encoded.join("");
        },
        decode : function(encodedPhrase) {
            var encoded = [];
            var encodedCharIndex = 0;
            for (var i = 0; i < encodedPhrase.length; i++) {
                encodedCharIndex = validChars.indexOf(encodedPhrase[i]) - validChars.indexOf(cipherKey[i])
                if (encodedCharIndex < 0) {
                    encodedCharIndex += validChars.length;
                }
                encoded.push( validChars[encodedCharIndex]);
            }
            return encoded.join("");
        }
    }
}

module.exports = Cipher;
