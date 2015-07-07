// function filter(isBig) {
Array.prototype.f = function (isBig) {
    var _this = this;
    console.log(_this);
    var tmp = [];
    /*  _this.forEach(function (item, index, array) {
        if (isBig(item)) {
            tmp.push(item);
        }
    });*/
    for (var i = 0; i < _this.length; i++) {
        if (isBig(_this[i])) {
            tmp.push(_this[i]);
        }
    }
    return tmp;
}

var arr = [1, 10, 8, 20, 3];
var filtered = arr.f(function (item) {
    return item >= 10;
});
console.log(filtered);

// }