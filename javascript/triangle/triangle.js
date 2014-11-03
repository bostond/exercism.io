function Triangle(side1, side2, side3) {

    var sides = [side1, side2, side3].sort();

    return {
        kind : function() {
            this.validate();
            return this.type();
        },
        validate: function() {
          sides.forEach(function(element) {
                if (element <= 0) {
                    throw "Invalid side '{" + element + "}'. Must be a positive integer";
                }
            });

            if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)) {
                throw "Invalid triangle";
            }
        },
        type : function() {
            if (this.isEquilateral()) {
                return "equilateral";
            } else if (this.isIsosceles()) {
                return "isosceles";
            } else if (this.isScalene()) {
                return "scalene";
            }
        },
        isEquilateral : function() {
            return (this.compareSides() == 2);
        },
        isIsosceles : function() {
            return (this.compareSides() === 1);
        },
        isScalene : function() {
            return (this.compareSides() === 0);
        },
        compareSides : function() {
            var equalSides = 0;
            var test = function testEquality(side) {
                if (side === 0) {
                    return;
                } else {
                    if (sides[side] === sides[side -1]) {
                        equalSides++;
                    }
                    testEquality(side -1 );
                }
            }
            test(sides.length -1 );
            return equalSides;
        }

    }
}

module.exports = Triangle;