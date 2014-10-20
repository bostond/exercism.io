function foodChain() {

    function Animal(name, explanation, previous, sing, middleVerse) {
        this.name = name;
        this.explanation = explanation;
        this.previous = previous;
        if (typeof sing !== "undefined") {
            this.sing = sing;
        }
        if (typeof middleVerse !== "undefined") {
            this.middleVerse = middleVerse;
        }
    }

    Animal.prototype = {
        sing: function () {
            return this.firstLine(this.name) + this.explain() + this.middleVerses()  + this.lastLine();
        },
        middleVerses: function () {
            if (typeof this.previous.previous !== "undefined") {
                return  this.middleVerse() + this.previous.middleVerses();
            } else {
                return  this.middleVerse();
            }
        },
        middleVerse: function() {
             return "She swallowed the " + this.name + " to catch the " + this.previous.name + ".\n";
        },

        firstLine: function() {
            return "I know an old lady who swallowed a " + this.name + ".\n"
        },

        explain: function() {
            return this.explanation;
        },

        lastLine : function () {
            return "I don't know why she swallowed the fly. Perhaps she'll die.\n";
        }
    }


    var fly = new Animal("fly", undefined, undefined, function() {
            return this.firstLine(this.name) + this.lastLine();
        });
    var spider = new Animal("spider", "It wriggled and jiggled and tickled inside her.\n", fly);
    var bird = new Animal("bird", "How absurd to swallow a bird!\n", spider, undefined,  function() {
        return "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n";
    });
    var cat = new Animal("cat", "Imagine that, to swallow a cat!\n", bird);
    var dog = new Animal("dog", "What a hog, to swallow a dog!\n", cat);
    var goat = new Animal("goat", "Just opened her throat and swallowed a goat!\n", dog);
    var cow = new Animal("cow", "I don't know how she swallowed a cow!\n", goat);
    var horse = new Animal("horse", "She's dead, of course!\n", undefined, function() {
        return this.firstLine(this.name) + this.explain();
    });

    return {
        verse : function(index) {
            var animals = [ fly, spider, bird, cat, dog, goat, cow, horse ];
            return (animals[index-1].sing());
        },

        verses : function(start, end) {
            var returnable = "";
            for (var i = start; i <= end; i++) {
               returnable += this.verse(i) + "\n";
            }
            return returnable;
        }
    };
};

module.exports = foodChain();