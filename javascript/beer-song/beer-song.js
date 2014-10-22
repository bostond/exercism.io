function Beer() {

    if (!String.format) {
        String.format = function(format) {
            var args = Array.prototype.slice.call(arguments, 1);
            return format.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] != 'undefined'
                    ? args[number]
                    : match
                    ;
            });
        };
    }

    return {

        printBottleCount : function (count) {
          switch (count) {
              case 0 :
                  return "No more bottles";
              case 1 :
                  return "1 bottle";
              default :
                  return count + " bottles";
          }
        },
        decrement : function (count) {
            return (count === 0) ? 99 : count - 1;
        },
        direction : function (count) {
            switch (count) {
                case 0 :
                    return "Go to the store and buy some more";
                case 1 :
                    return "Take it down and pass it around";
                default :
                    return "Take one down and pass it around";
            }

        },

        verse: function (verseNumber) {
            var bottleCount = this.printBottleCount(verseNumber);
            return String.format("{0} of beer on the wall, {1} of beer.\n{2}, {3} of beer on the wall.\n",
                bottleCount, bottleCount.toLowerCase(),
                this.direction(verseNumber), this.printBottleCount(this.decrement(verseNumber)).toLowerCase()
            );
        },


        sing : function(start, end) {
            if (start === 0) {
                return this.verse(start);
            } else {
                end = end || 0;

                var song = "";
                for (var i = start; i >= end; i--) {
                    song += this.verse(i) + ((i !== end) ? "\n" : "");
                }

                return song;
            }
        }


    }

}

module.exports = Beer();