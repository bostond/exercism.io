function clock() {

    var secondsInDay = 86400;
    var secondsInHour = 3600;
    var secondsInMinute = 60;
    
    var pad = function(num, size) {
        var str = "" + num;
        while (str.length < size) {
            str = "0" + str;
        }
        return str;
    }

    return {
        at: function at(hours, minutes) {
            var totalSeconds = hours * secondsInHour;
            if (minutes) {
               totalSeconds += minutes * secondsInMinute;
            }
            return {
                toString : function() {
                    return pad(Math.floor( totalSeconds / secondsInHour), 2) + ":" + pad(( totalSeconds % secondsInHour) / secondsInMinute,2);
                },
                plus: function(minutes) {
                    var newTotalSeconds = totalSeconds += (minutes * 60);
                    if (newTotalSeconds > secondsInDay) {
                        newTotalSeconds = newTotalSeconds % secondsInDay;
                    }
                    return at(Math.floor( newTotalSeconds / secondsInHour), (newTotalSeconds % secondsInHour) / secondsInMinute)
                },
                minus: function(minutes) {
                    var newTotalSeconds = totalSeconds -= (minutes * secondsInMinute);
                    if (newTotalSeconds < 0) {
                        newTotalSeconds = secondsInDay - Math.abs(newTotalSeconds);
                    }
                    return at(Math.floor( newTotalSeconds / secondsInHour), (newTotalSeconds % secondsInHour) / secondsInMinute)
                },
                seconds : function() {
                  return totalSeconds;
                },
                equals : function(other) {
                    return (this.seconds() === other.seconds());
                }

            }
        }
    };
}

module.exports = clock();