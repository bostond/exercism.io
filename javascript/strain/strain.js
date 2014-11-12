var strain = function strain() {
    return {
        keep : function(array, filter) {
            var filteredArray = [];
            array.forEach(function (element) {
               if (filter(element)) {
                   filteredArray.push(element);
               }
            });

            return filteredArray;
        },
        discard : function(array,  filter) {
            return this.keep(array, function(element) { return ! filter(element)});
        }
    }
}

module.exports = strain();