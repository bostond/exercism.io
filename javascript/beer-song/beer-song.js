function Beer() {

    return {
        verse: function (verseNumber) {
            if (verseNumber === 0 ) {
                return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
            } else if (verseNumber === 1) {
                return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
            } else if (verseNumber === 2) {
                return "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n";
            } else {
                return verseNumber + " bottles of beer on the wall, " + verseNumber + " bottles of beer.\nTake one down and pass it around, " + (verseNumber - 1) + " bottles of beer on the wall.\n";
            }
        },

        sing : function(start, end) {
          if (start === 0) {
              return this.verse(start);
          } else {
              if (!end) {
                  end = 0;
              }

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