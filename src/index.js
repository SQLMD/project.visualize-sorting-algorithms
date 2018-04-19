// How can we use require here if it's frontend? We can thank webpack.
// Thank You WebPack!

const BubbleSort = require("./BubbleSort");

// A link to our styles!
require("./index.css");
const reversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const random = [8, 5, 6, 3, 2, 10, 1, 4, 7, 9];
const bubbleList = random;

const sort = new BubbleSort(bubbleList);

//const steps = sort.sortedSteps;

const bubbles = document.querySelectorAll("bubble");
const bubble = d3
  .select("#list")
  .selectAll("bubble")
  .data(bubbleList);

bubble
  .style("height", (d) => d + "em")
  .style("width", (d) => d + "em")
  .text((d) => d);

// bubbles.forEach((bubble, index) => {
//   bubble.style.height = bubbleList[index] + "em";
//   bubble.style.width = bubbleList[index] + "em";
//   bubble.textContent = bubbleList[index];
// });

//bubbles[0].style.borderBottom = "3 black solid";

for (let i = 0; i < bubbleList.length; i++) {
  setTimeout(function() {
    for (let j = 0; j < bubbleList.length; j++) {
      setTimeout(function() {
        if (bubbleList[j] > bubbleList[j + 1]) {
          [bubbleList[j], bubbleList[j + 1]] = [
            bubbleList[j + 1],
            bubbleList[j],
          ];
          const bubble = d3
            .select("#list")
            .selectAll("bubble")
            .data(bubbleList);

          bubble
            .style("height", (d) => d + "em")
            .style("width", (d) => d + "em")
            .text((d) => d);
        }
      }, 1000 * j);
    }
  }, (11000 - i * 1000) * i);
}

// result.innerText = sort.sortedArray;
// d3
//   .select("body")
//   .transition()
//   .duration(7500 )
//   .style("background-color", "black");
//var dataset = [5, 10, 15, 20, 25];
//d3.select("body").selectAll("p");

// d3
//   .select("#svg-try")
//   .selectAll("circle")
//   .data(random)
//   .enter()
//   .append("circle")
//   .attr("cy", 50 + "%")
//   .attr("cx", (d, i) => (i + 2) * 8 + "%")
//   .attr("r", (d) => d * 5);

// d3
//   .select("#svg-try")
//   .selectAll("text")
//   .data(random)
//   .enter()
//   .append("text")
//   .text((d) => d)
//   .attr("y", 50 + "%")
//   .attr("x", (d, i) => (i + 2) * 8 - 1 + "%")
//   .attr("fill", "black");
