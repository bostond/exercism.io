var node = function(value, previous, next) {
    return {
        value : value,
        previous: previous,
        next : next
    }
}

var LinkedList = function LinkedList() {
    var first = null;
    var last = null;

    function isEmpty() {
        return (first === null);
    }

    function initialize(node) {
        first = node;
        last = first;
    }

    function clear() {
        first = null;
        last = null;
    }

    return {
        push : function(value) {
            if (isEmpty()) {
                initialize(node(value, null, null));
            } else {
                var newNode = node(value, last, null);
                last.next = newNode;
                last = newNode;
            }
        },
        pop : function() {
            if (! isEmpty()) {
                var val = last.value;
                if (last.previous === null) {
                    clear();
                } else {
                    last = last.previous;
                    last.next = null;
                }
                return val;
            } else {
                return undefined;
            }
        }, shift : function() {
            if (! isEmpty() ) {
                var val = first.value;
                if (first.next === null) {
                    clear();
                } else {
                    first = first.next;
                    first.previous = null;
                }
                return val;
            } else {
                return undefined;
            }
        }, unshift : function(value) {
            if (isEmpty()) {
                initialize(node(value, null, null));
            } else {
                var newNode = node(value, null, first);
                first.previous = newNode;
                first = newNode;
            }
        }, count : function () {
            var countElements = function countElements(counter, nextElement) {
                if (nextElement === null) {
                    return counter;
                } else {
                    return countElements(++counter, nextElement.next);
                }
            }
            return countElements(0, first);
        }, delete : function(value) {
            var inspectAndDelete = function inspectAndDelete(value, node) {
                if (node !== null) {
                    if (node.value === value) {
                        if (node.previous !== null) {
                            var deletedValue = node;
                            node.previous.next = node.next;
                            deletedValue = null;
                        } else if (node.next !== null) {
                            node.next.previous = null;
                            node = null;
                        } else {
                           clear();
                        }
                    } else {
                        if (node.previous !== null) {
                            return inspectAndDelete(value, node.previous);
                        }
                    }
                }
            }
            if (last !== null) {
                return inspectAndDelete(value, last);
            }
        }
    }
}

module.exports = LinkedList;