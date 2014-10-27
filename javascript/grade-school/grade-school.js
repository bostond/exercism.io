function gradeSchool() {

    var school = {
    };

    return {

       roster : function() {
            return school;
       },

        add : function(name, grade) {
            if (school.hasOwnProperty(grade)) {
                if (school[grade].indexOf(name) != -1) {
                    //
                } else {
                    school[grade].push(name);
                    school[grade].sort();
                }
            } else {
                school[grade] = [name];
            }
        },

        grade: function(grade) {
            if (school.hasOwnProperty(grade)) {
                return school[grade];
            } else {
                return [];
            }
        }

    }

}

module.exports = gradeSchool;