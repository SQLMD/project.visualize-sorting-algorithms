class BubbleSort {
  constructor(array) {
    this.array = array;
  }
  get sortedArray() {
    return this.sort();
  }

  sort() {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length; j++) {
        let swapped = false;
        if (this.array[j] > this.array[j + 1]) {
          const swapValue = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = swapValue;
        }
      }
    }
    return this.array;
  }
}

module.exports = BubbleSort;
