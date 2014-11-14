var accumulate = function accumulate(list, accumulator) {
    var newarray = [];
    for (var i =0; i <list.length; i++) {
        newarray.push(accumulator(list[i]));
    }
    return newarray;

}

module.exports = accumulate;