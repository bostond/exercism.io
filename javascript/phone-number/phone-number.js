function PhoneNumber(input) {
    var areaCode = "000";
    var cityCode = "000";
    var number = "0000";

    if (input) {
        parse(input.replace(/[^0-9]/g, ""));
    }

    function parse(userinput) {
        if (! /^[0-9]+$/.test(userinput)) {
            return;
        }

        if (userinput.length < 10 || userinput.length > 11 ) {
            return;
        }

        if (userinput.length === 11) {
            if (userinput.charAt(0) === '1') {
                parse(userinput.substr(1));
                return;
            } else {
                return;
            }
        }

        areaCode = userinput.substr(0,3);
        cityCode = userinput.substr(3,3);
        number = userinput.substr(6,4);
    }

    return {

        number: function() {
            return areaCode + cityCode + number;
        },
        areaCode : function() {
            return areaCode;
        },
        toString: function() {
            return "(" + areaCode + ") " + cityCode + "-" + number;
        }

    }
}

module.exports = PhoneNumber;