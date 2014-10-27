function gradeSchool() {

    var school = {
        // create a deep copy of the school's grades and rosters.
        clone : function() {
            var copy = this.constructor();
            for (var attr in this) {
                if (this.hasOwnProperty(attr) && attr !== 'clone') {
                    if (this[attr] instanceof Array) {
                        copy[attr] = this[attr].slice();
                    } else {
                        copy[attr] = this[attr];
                    }
                }
            }
            return copy;
        }
    };

    return {

        roster : function() {
            return school.clone();
        },
        add : function(name, grade) {
            if (school.hasOwnProperty(grade)) {
                if (school[grade].indexOf(name) === -1) {
                    school[grade].push(name);
                    school[grade].sort();
                }
            } else {
                school[grade] = [name];
            }
        },
        grade: function(grade) {
            if (school.hasOwnProperty(grade)) {
                return school[grade].slice();
            } else {
                return [];
            }
        }
    }
}

module.exports = gradeSchool;