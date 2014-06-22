var assert = require("assert");
var interleave = require("../interleave.js");

describe('interleave', function() {
    it('should return [1,2,3,1,2,3] for (2, [[1,1,1],[2,2,2,2],[3,3,3]])', function() {
        assert.deepEqual([1,2,3,1,2,3], interleave(2, [[1,1,1],[2,2,2,2],[3,3,3]]));
    });

    it('should return [1,2,2] for (2, [[1], [2,2]])', function() {
        assert.deepEqual([1,2,2], interleave(2, [[1], [2,2]]));
    });

    it('should return [1,2] for (1, [[1], [2,2]])', function() {
        assert.deepEqual([1,2], interleave(1, [[1], [2,2]]));
    });
});

