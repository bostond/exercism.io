function Bob() {

    var shouting = "Whoa, chill out!";
    var question = "Sure.";
    var silence =  "Fine. Be that way!";
    var defaultResp = "Whatever.";

    return {
        hey :  function(statement) {
            if (Object.prototype.toString.call(statement) !== '[object String]') {
                return defaultResp;
            }

            if (isShouting(statement)) {
                return shouting;
            }

            if (isQuestion(statement)) {
                return question;
            }

            if (isSilence(statement)) {
                return silence;
            }

            return defaultResp;
        }
    };

    function isShouting(statement) {
        // if it ends with a exlaimation point, it's shouting,
        // *unless* the sentence contains one or more lowercase letters.
        if (/^.*!$/.test(statement) && ! /[a-z]/.test(statement)) {
            return true;
        }

        // if it's all uppercase, then it's shouting
        if (statement.toUpperCase() === statement && statement.toLowerCase() !== statement) {
            return true;
        }

        return false;
    };

    function isQuestion(statement) {
        return /\?$/.test(statement);
    };

    function isSilence(statement) {
        return /^\s*$/.test(statement);
    };
};

module.exports = Bob;