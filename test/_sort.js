const BubbleSort = require("../src/BubbleSort");
const { expect } = require("chai");

const bubble = new BubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

describe("BubbleSort", () => {
  it("should be a function", () => {
    expect(bubble).to.be.an("object");
  });
  it("should have a sort method", () => {
    expect(bubble.sort).to.be.a("function");
  });
  it("should return an array", () => {
    const sA = bubble.sortedArray;
    expect(sA).to.be.an("array");
  });
  //it("should sort an array in the correct order", () => {});
});
