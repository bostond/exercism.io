var Matrix = function Matrix(matrixString) {
    var rows = [];
    var columns = [];

    matrixString.split("\n").map(function (row) {
        var parsedRow = [];
        row.split(" ").map(function (entry, index) {
            var int = parseInt(entry);
            parsedRow.push(int);
            if (index < columns.length) {
                columns[index].push(int);
            } else {
                columns[index] = [int];
            }
        });
        rows.push(parsedRow);
    });

    return {
        rows : rows,
        columns: columns
    }
}

module.exports = Matrix;