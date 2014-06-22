/**
 * Returns arrayOfXInterleavedElements
 * !! side effect mutates arrOfArrs
 */
module.exports = function interleave(X, arrOfArrs) {
    var expected = X * arrOfArrs.length;
    var sumArrLens = arrOfArrs.reduce(function (prev, curr, idx, arr) {
        return prev + curr.length;
    }, 0);
    var result = [];
    while (result.length < expected && result.length < sumArrLens) {
        arrOfArrs.forEach(function (val, idx, arr) {
            var toPush = val.shift();
            if (toPush !== undefined) {
                result.push(toPush);
            }
        });
    }
    return result;
}
