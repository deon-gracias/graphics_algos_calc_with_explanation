
function midpointCircle(xc, yc, r) {
  let pi = 0,
    x = 0,
    y = r,
    p = 1 - r;
  let result = "";

  result += `Here center is at (xc, yc) => (${xc}, ${yc}) and radius = ${r} <br> P = 1 - r = ${
    1 - r
  }`;

  result += `<table>
  <table border=1>
  <tr>
    <th>P<sub>k</sub></th>
    <th>X<sub>k+1</sub></th>
    <th>Y<sub>k+1</sub></th>
    <th>Plot</th>
    <th>P<sub>k+1</sub></th>
  </tr>
  <tr>
    <td>-</td>
    <td>${x}</td>
    <td>${y}</td>
    <td>(${x}, ${y})</td>
    <td>P <sub>0</sub> = 1 - r = 1 - ${r} = ${p}</td>
  </tr>
  `;

  for (let pi = 1; x < y; pi++) {
    result += `
    <tr>
      <td>${`P<sub>${pi}</sub> = ${p} ${p < 0 ? "<" : ">"} 0`}</td>
      <td>${x + 1}</td>
      <td>${p < 0 ? y : y - 1}</td>
      <td>(${x + 1}, ${p < 0 ? y : y - 1})</td>
    `;

    if (p < 0) {
      result += `<td>P<sub>${pi}</sub> = P<sub>${pi - 1}</sub> + 2x<sub>${
        pi - 1
      }</sub> + 3 <br> = ${p} + ${2 * x} + 3 = ${p + 2 * x + 3}</td>`;
      p += 2 * x + 3;
      x += 1;
    } else {
      result += `<td>P<sub>${pi}</sub> = P<sub>${pi - 1}</sub> + 2x<sub>${
        pi - 1
      }</sub> - 2y<sub>${pi - 1}</sub> + 5 <br> = ${p} + ${2 * x} - ${
        2 * y
      } + 5 = ${p + 2 * x - 2 * y + 5}</td>`;
      p += 2 * x - 2 * y + 5;
      x += 1;
      y -= 1;
    }
  }

  result += `</tr></table>`;

  document.querySelector("#result").innerHTML = result;
}