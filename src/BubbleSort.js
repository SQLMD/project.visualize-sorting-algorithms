class BubbleSort {
  constructor(array) {
    this.array = array;
    this.sortSteps = [this.array.slice(0)];
  }
  get sortedArray() {
    return this.sort();
  }

  get sortedSteps() {
    this.sort();
    return this.sortSteps;
  }

  sort() {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < this.array.length; j++) {
        //let swapped = false;
        if (this.array[j] > this.array[j + 1]) {
          [this.array[j], this.array[j + 1]] = [
            this.array[j + 1],
            this.array[j],
          ];
          const step = this.array.slice(0);
          this.sortSteps.push(step);
        }
      }
    }
    return this.array;
  }
}

module.exports = BubbleSort;
