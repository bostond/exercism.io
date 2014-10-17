function hamming() {

    return {
        compute: function (strandA, strandB) {
            var end = Math.min(strandA.length, strandB.length);
            var distance = 0;

            for (i = 0; i < end; i++) {
                if (strandA[i] !== strandB[i]) {
                    distance++;
                }
            }

            return distance;
        }
    }
}

module.exports = hamming();