function Gigasecond(birthday) {
    return {
        date : function() {
            var gigasec = new Date();
            gigasec.setTime((birthday.getTime() + 10e11));
            gigasec.setHours(0);
            gigasec.setMinutes(0);
            gigasec.setSeconds(0);
            return gigasec;
        }
    }
}

module.exports = Gigasecond;