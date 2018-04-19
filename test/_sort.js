const BubbleSort = require("../src/BubbleSort");
const { expect } = require("chai");

const bubble = new BubbleSort([5, 8, 3, 2, 1]);

describe("BubbleSort", () => {
  it("should be a function", () => {
    expect(bubble).to.be.an("object");
  });
  it("should have a sort method", () => {
    expect(bubble.sort).to.be.a("function");
  });
  it("should return an array", () => {
    expect(bubble.sortedArray).to.be.an("array");
  });
  it("should sort an array in the correct order", () => {
    expect(bubble.sortedArray).to.be.deep.equal([1, 2, 3, 5, 8]);
  });
  it("sortedSteps should be an array", () => {
    expect(bubble.sortedSteps).to.be.an("array");
  });
});
