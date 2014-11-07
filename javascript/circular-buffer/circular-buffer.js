function BufferEmptyException() {
    this.name = "BufferEmptyException";
};

function BufferFullException() {
    this.name = "BufferFullException";
};

var CircularBuffer = function(int) {
    var buffer = new Array(int);
    var start = 0;
    var end = 0;
    var tracked = 0;

    for (var i = 0; i < int; i++) {
        buffer[i] = undefined;
    }

    return {
        read: function () {
            if (isEmpty()) {
                throw new BufferEmptyException();
            }

            var char = buffer[start];
            tracked--;
            if ((start + 1) % buffer.length === 0) {
                start = 0;
            } else {
                start++;
            }
            return char;

        },
        write: function (char) {
            if (isFull()) {
                throw new BufferFullException();
            }

            if (typeof char !== 'undefined' && char !== null) {
                buffer[end] = char;
                if ((end + 1) % buffer.length === 0) {
                    end = 0;
                } else {
                    end++;
                }
                tracked++;
            }
        },
        forceWrite: function (char) {
            if (typeof char !== 'undefined' && char !== null) {
                if (! isFull()) {
                    this.write(char);
                } else {
                    this.read();
                    this.write(char);
                }
            }
        },
        clear : function clear() {
            tracked = 0;
            start = 0;
            end = 0;
        }
    }

    function isEmpty() {
        return (tracked === 0);
    };

    function isFull() {
        return (!isEmpty() && (start === end));
    };
}

module.exports = {
    circularBuffer : function (int) {
        return new CircularBuffer(int);
    },
    bufferEmptyException : function() {
        return new BufferEmptyException();
    },
    bufferFullException : function() {
        return new BufferFullException();
    }

}