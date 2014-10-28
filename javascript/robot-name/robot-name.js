function robotName() {
    var used = {};
    var random = function () {
        var name = randomUppercaseLetter() + randomUppercaseLetter() + randomInt(999);
        if (used.hasOwnProperty(name)) {
            return random();
        } else {
            used[name] = 1;
            return name;
        }
    }
    var randomUppercaseLetter = function() {
        return  String.fromCharCode(65 + randomInt(25))
    }
    var randomInt = function(range) {
        return Math.floor((Math.random() * range) + 1)
    }

    return {
        name: random(),
        reset : function() {
            this.name = random();
        }
    }
}

module.exports = robotName;