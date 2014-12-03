var Bst = function Bst(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

Bst.prototype.insert = function(toInsert) {
    if (this.data >= toInsert ) {
        if (this.left === null) {
            this.left = new Bst(toInsert, null, null);
        } else {
            this.left.insert(toInsert);
        }
    } else {
        if (this.right === null) {
            this.right = new Bst(toInsert, null, null);
        } else {
            this.right.insert(toInsert);
        }
    }
}

Bst.prototype.each = function (callback) {
    if (this.left !== null) {
        this.left.each(callback);
    }

    callback(this.data);

    if (this.right !== null) {
        this.right.each(callback);
    }

}

module.exports = Bst;