// How can we use require here if it's frontend? We can thank webpack.
// Thank You WebPack!
require("./index.css");

const BubbleSort = require("./BubbleSort");
const genArray = require("./ArrayGenerator");
let sort;
let steps = [];
let bubbleList = [];
const stepSpan = document.querySelector("#steps");
const btnStart = document.querySelector("#btn-start");
const radios = document.querySelectorAll("input");
const list = document.querySelector("#list");

const resizeBubbles = (data) => {
  const bubbles = d3
    .select("#list")
    .selectAll("bubble")
    .data(data);

  bubbles
    .style("height", (d) => d + "em")
    .style("width", (d) => d + "em")
    .text((d) => d);
};

const addBubbles = (data) => {
  bubbles = d3
    .select("#list")
    .selectAll("bubble")
    .data(data)
    .enter()
    .append("bubble");
  resizeBubbles(data);
  sort = new BubbleSort(bubbleList);
  steps = sort.sortedSteps;
};

const bubbleSort = () => {
  radios.forEach((radio) => {
    radio.disabled = true;
  });
  for (let i = 0; i < steps.length; i++) {
    setTimeout(function() {
      resizeBubbles(steps[i]);
      stepSpan.innerHTML =
        "Step <span class='step'>" + (i + 1) + "</span>: " + steps[i];
    }, 300 * i);
  }
};

const setup = (order) => {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  bubbleList = genArray(order, 10);
  addBubbles(bubbleList);
};

btnStart.addEventListener("click", bubbleSort);
radios.forEach((radio) => {
  radio.addEventListener("click", () => {
    setup(radio.value);
  });
});

setup("ordered");

