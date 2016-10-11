const assert = require('assert');

describe('test of Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert([1, 2, 3].indexOf(5) === -1);
    });

    it('should return index value found', () => {
      assert.strictEqual([1, 2, 3].indexOf(2), 1);
    });

  });

  describe('#lengthOf()', () => {
    it('should have a length', () => {
      assert.strictEqual([1, 2].length, 2)
    });

  });


  describe('slice', () => {
    it('should slice slowly', done => {
    const arr = [ "a", "b", "c"];
    setTimeout(() => {
      assert.deepStrictEqual(arr, arr.slice());
      done();
    }, 1000)

    })
  })

});