var SecretHandshake = function SecretHandshake(number) {
    if (Object.prototype.toString.call(number) !== '[object Number]') {
        throw "Handshake must be a number";
    }

    var handshakes = ["wink", "double blink", "close your eyes", "jump"];
    return {
        commands : function() {
            var handshake = [];
            for (var bitmask = 1, index = 0; bitmask <= 8; bitmask <<= 1, index++) {
                if (bitmask & number) {
                    handshake.push(handshakes[index]);
                }
            }
            if (16 & number) {
                return handshake.reverse();
            } else {
                return handshake;
            }
        }
    }
}

module.exports = SecretHandshake;