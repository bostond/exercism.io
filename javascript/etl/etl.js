function etl(legacy) {
    var newScores = {};
    for (var attr in legacy) {
        if (legacy.hasOwnProperty(attr)) {
            legacy[attr].forEach(function(entry) {
                newScores[entry.toLowerCase()] = parseInt(attr);
            });
        }
    }
    return newScores;
}

module.exports = etl;