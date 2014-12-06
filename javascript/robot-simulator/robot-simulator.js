var directions = [ 'north', 'east', 'south', 'west'];
var shorthand = { R : "turnRight", L : "turnLeft", A: "advance" };
var coordinates = function(xcoord,ycoord) {
    return {
        x: xcoord,
        y: ycoord,
        advance : function(bearing) {
            switch (bearing) {
                case "north":
                    this.y++;
                    break;
                case "east":
                    this.x++;
                    break;
                case "south":
                    this.y--;
                    break;
                case "west":
                    this.x--;
                    break;
            }
        }
    }
};

var Robot = function Robot() {
    var bearing = undefined;
    var coord = undefined;
    var coordinates = undefined;
};

Robot.prototype.orient = function (bearing) {
    if (directions.indexOf(bearing) === -1 ) {
        throw "Invalid Robot Bearing";
    }
    this.bearing = bearing;
};
Robot.prototype.turnRight = function() {
    var currentIndex = directions.indexOf(this.bearing);
    this.bearing = directions[(currentIndex < (directions.length - 1)) ? (currentIndex + 1) : 0];
};

Robot.prototype.turnLeft = function() {
    var currentIndex = directions.indexOf(this.bearing);
    this.bearing = directions[(currentIndex > 0) ? (currentIndex - 1) : (directions.length - 1)];
};

Robot.prototype.at = function (x,y) {
    this.coord = coordinates(x, y);
    this.coordinates = [this.coord.x, this.coord.y];
};

Robot.prototype.advance  = function() {
    this.coord.advance(this.bearing);
    this.coordinates = [this.coord.x, this.coord.y];
};

Robot.prototype.instructions  = function(todo) {
    return todo.split("").map(function(abbr) {
        return shorthand[abbr];
    });
};

Robot.prototype.place = function(settings) {
    this.at(settings.x,settings.y);
    this.bearing = settings.direction;
};

Robot.prototype.evaluate = function(todo) {
    this.instructions(todo).forEach(function(instruction) {
        this[instruction]();
    }, this)
};

module.exports = Robot;