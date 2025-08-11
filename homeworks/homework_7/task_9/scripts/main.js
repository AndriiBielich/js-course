Array.prototype.myForEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}

Array.prototype.myFilter = function(cb) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}
