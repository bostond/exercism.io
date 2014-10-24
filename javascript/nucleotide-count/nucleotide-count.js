function nucleotide(seq) {

    var sequence = seq;
    var hash = calculate(sequence || "");

    function calculate(sequence) {
        var hash = { 'A': 0, 'C': 0, 'G': 0, 'T' : 0 };
        sequence.split('').forEach(function(entry) {
            if (hash.hasOwnProperty(entry)) {
                hash[entry] = hash[entry] + 1;
            }
        });
        return hash;
    }

    var analyze = function(char) {
        if (! sequence) {
            return 0;
        }

        return hash[char] || 0;

    }

    return {

        count : function(seq) {
            return analyze(seq);
        },
        histogram : function() {
            return hash;
        }

    }

}

module.exports = nucleotide;