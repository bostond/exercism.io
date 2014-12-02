var Garden = function Garden(config) {
    var plants = { R : "radishes", C : "clover", G: "grass", V : "violets"};
    var children = ["Alice", "Bob", "Charlie", "David",
        "Eve", "Fred", "Ginny", "Harriet",
        "Ileana", "Joseph", "Kincaid", "Larry"];

    var rows = config.split("\n").map(function (row) {
        return row.split("").map(function (entry) {
            return plants[entry];
        });
    });

    var lookup = {};

    for (var i=0, j=0; i < children.length; i++, j+=2) {
        lookup[children[i].toLowerCase()] = [rows[0][j], rows[0][(j+1)], rows[1][j], rows[1][(j+1)]];
    }
    return lookup;

}

module.exports = Garden;