function SpaceAge(age) {

    var earthYearInSeconds = 31557600;

    function format(number) {
        return parseFloat((number).toFixed(2));
    }

    function calculate(seconds, secondsInYear) {
        return (seconds / secondsInYear);
    }

    var planets = {
        Earth : earthYearInSeconds,
        Mercury: earthYearInSeconds * 0.2408467,
        Venus: earthYearInSeconds* 0.61519726,
        Mars: earthYearInSeconds * 1.8808158,
        Jupiter: earthYearInSeconds * 11.862615,
        Saturn: earthYearInSeconds * 29.447498,
        Uranus: earthYearInSeconds * 84.016846,
        Neptune: earthYearInSeconds * 164.79132
    }

    var obj = {
        seconds : age
    }

    for (var attr in planets) {
        var helper = function(attr) {
            return function() {
                return format(calculate(age, planets[attr]));
            }
        }
        if (planets.hasOwnProperty(attr)) {
            obj["on" + attr] = helper(attr);
        }
    }

    return obj;
}
module.exports = SpaceAge;