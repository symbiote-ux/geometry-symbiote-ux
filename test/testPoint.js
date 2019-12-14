const assert = require("chai").assert;
const { Point } = require("../src/point.js");

describe("Point", function() {
  describe("toString", function() {
    it("Should give string representation of the given point", function() {
      const point = new Point(2, 3);
      const actual = point.toString();
      assert.strictEqual(actual, `[Point @(2,3)]`);
    });
  });
  describe("visit", function() {
    it("should visit the given reference and perform the add operation on coordinates of point", function() {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x + y);
      assert.strictEqual(actual, 5);
    });
    it("should visit the given reference and perform the multiply operation on coordinates of point", function() {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x * y);
      assert.strictEqual(actual, 6);
    });
    it("should visit the given reference and perform the division operation on coordinates of point", function() {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x / y);
      assert.approximately(actual, 0.6, 0.5);
    });
  });
  describe("isEqualTo",function(){
    it("gives true if both points are same and of same instance",function(){
      const point = new Point(2,3);
      const other = new Point(2,3);
      assert.ok(point.isEqualTo(other));
    })
  })
});