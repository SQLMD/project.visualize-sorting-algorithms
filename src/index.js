// How can we use require here if it's frontend? We can thank webpack.
// Thank You WebPack!

const BubbleSort = require("./BubbleSort");

// A link to our styles!
require("./index.css");

const sort = new BubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

const result = document.querySelector("#result");

result.innerText = sort.sortedArray;
