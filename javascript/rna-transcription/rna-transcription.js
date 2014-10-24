function toRna (sequence) {
    var transcriptionMap = {
        'G' : 'C',
        'C' : 'G',
        'T' : 'A',
        'A' : 'U'
    }

    var result = [];

    sequence.split('').forEach(function(entry) {
        result.push(transcriptionMap[entry] || entry);
    });

    return result.join('');
}

module.exports = toRna;