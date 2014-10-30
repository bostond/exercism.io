function SpaceAge(age) {

    var earthYearInSeconds = 31557600;

    function format(number) {
        return parseFloat((number).toFixed(2));
    }

    function calculate(seconds, secondsInYear) {
        return (seconds / secondsInYear);
    }
    
    return {
        seconds : age,
        onMercury : function () {
            return format(calculate(this.seconds, earthYearInSeconds * 0.2408467));
        },
        onEarth : function() {
            return format(calculate(this.seconds, earthYearInSeconds));
        },
        onVenus : function () {
            return format(calculate(this.seconds, earthYearInSeconds * 0.61519726));
        },
        onMars : function () {
            return format(calculate(this.seconds, earthYearInSeconds * 1.8808158));
        },
        onJupiter : function () {
            return format(calculate(this.seconds, earthYearInSeconds * 11.862615));
        },
        onSaturn : function () {
            return format(calculate(this.seconds, earthYearInSeconds * 29.447498));
        },
        onUranus : function () {
            return format(calculate(this.seconds, earthYearInSeconds * 84.016846));
        },
        onNeptune : function () {
            return format(calculate(this.seconds, earthYearInSeconds * 164.79132));
        }
    }
}

module.exports = SpaceAge;