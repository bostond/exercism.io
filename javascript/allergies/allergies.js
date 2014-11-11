var allergyArray =  ["eggs","peanuts", "shellfish",
         "strawberries", "tomatoes","chocolate",
         "pollen", "cats"];

var Allergies = function (number) {
    return {
        list: function() {
            var allergies = [];
            for (var bitmask = 1, index = 0; bitmask <= 128; bitmask <<= 1, index++) {
                if (bitmask & number) {
                    allergies.push(allergyArray[index]);
                }
            }
            return allergies;
        },
        allergicTo : function(string) {
            return (this.list().indexOf(string) !== -1)
        }
    }
}

module.exports = Allergies;