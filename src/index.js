// How can we use require here if it's frontend? We can thank webpack.
// Thank You WebPack!

const BubbleSort = require("./BubbleSort");

// A link to our styles!
require("./index.css");
const reversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const random = [8, 5, 6, 3, 2, 10, 1, 4, 7, 9];
const bubbleList = random;

const sort = new BubbleSort(bubbleList);

const result = document.querySelector("#result");

const bubbles = document.querySelectorAll("bubble");

bubbles.forEach((bubble, index) => {
  bubble.style.height = bubbleList[index] + "em";
  bubble.style.width = bubbleList[index] + "em";
  bubble.textContent = bubbleList[index];
});

for (let i = 0; i < bubbleList.length; i++) {
  setTimeout(function() {
    for (let j = 0; j < bubbleList.length; j++) {
      setTimeout(function() {
        if (bubbleList[j] > bubbleList[j + 1]) {
          [bubbleList[j], bubbleList[j + 1]] = [
            bubbleList[j + 1],
            bubbleList[j],
          ];
          bubbles.forEach((bubble, index) => {
            bubble.style.height = bubbleList[index] + "em";
            bubble.style.width = bubbleList[index] + "em";
            bubble.textContent = bubbleList[index];
          });
        }
      }, 500 * j);
    }
  }, 5200 * i);
}

//result.innerText = sort.sortedArray;
