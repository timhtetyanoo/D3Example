import { select } from "d3";
import { vizData } from "./vizData";
import { makeData } from "./makeData";

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);
console.log("hello");
let t = 0;
setInterval(() => {
  const n = Math.sin(t) * 15;
  const data = makeData(n, t);
  svg.call(vizData, data);
  // vizData(svg, data);
  t = t + 0.01;
}, 1000 / 60);
