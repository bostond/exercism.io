var words = function (words) {

    if (Object.prototype.toString.call(words) !== '[object String]') {
        return
    }

    var hash = {};
    words.split(/\s+/).forEach(function(entry) {
       if (hash.hasOwnProperty(entry)) {
           hash[entry] = hash[entry] + 1;
       } else {
           hash[entry] = 1;
       }
    });

    return hash;
}

module.exports = words;