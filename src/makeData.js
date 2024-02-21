import { range } from "d3";
export function makeData(n, t) {
  const data = range(n).map((d) => ({
    x: d * 50 + 50,
    y: 250 + Math.sin(d * 0.5 + t) * 200,
    r: 20 + Math.sin(d * 0.5 + t) * 10,
  }));
  return data;
}
