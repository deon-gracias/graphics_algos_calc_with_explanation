function bresenham(x1, y1, x2, y2) {
  let result = "";
  let dx = Math.abs(x2 - x1);
  let dy = Math.abs(y2 - y1);
  let pi = 1,
    pk;
  let x = x1,
    y = y1,
    swap = 0;
  let s1 = x2 - x1 >= 0 ? +1 : -1;
  let s2 = y2 - y1 >= 0 ? +1 : -1;

  result += `x1 = ${x1}, y1 = ${y1}, x2 = ${x2}, y2 = ${y2} <br/>`;
  result += "<br />";
  result += `dx = |x2 - x1| = |${x2} - ${x1}| = ${dx} <br/>`;
  result += `dy = |y2 - y1| = |${y2} - ${y1}| = ${dy} <br/>`;
  result += "<br />";
  if (dy > dx) {
    swap = 1;
    dy = [dx, (dx = dy)][0];
    result += `dy > dx. Therefore m > 1 <br> Swap dx and dy <br> Therefore dx = ${dx} and dy = ${dy} <br/>`;
  } else {
    result += `dy > dx. Therefore m < 1 <br> No Swapping occurs <br> Therefore dx = ${dx} and dy = ${dy} <br/>`;
  }
  result += "<br />";

  result += `Decide Sign <br> 
  s1 = x2 - x1 = ${s1 >= 0 ? `${x2 - x1} >= 0` : `${x2 - x1} < 0`} = ${
    s1 >= 0 ? `+${s1}` : s1
  } <br>  
  s2 = y2 - y1 = ${s2 >= 0 ? `${y2 - y1} >= 0` : `${y2 - y1} < 0`} = ${
    s2 >= 0 ? `+${s2}` : s2
  } <br>`;

  pk = 2 * dy - dx;

  result += "<br />";
  result += `Initial Parameter : P<sub>${pi}</sub> = ${pk} <br>`;
  result += `Let x = x1 = ${x} and y = y1 = ${y} <br>`;

  result += `
  <table border=1>
      <tr>
        <th>P<sub>k</sub></th>
        <th>X<sub>k+1</sub></th>
        <th>Y<sub>k+1</sub></th>
        <th>Plot</th>
        <th>P<sub>k+1</sub></th>
      </tr>
      <tr>
        <td>Initial</td>
        <td>${x1}</td>
        <td>${y1}</td>
        <td>(${x1}, ${y1})</td>
        <td>P<sub>${pi}</sub> = ${pk}</td>
      </tr>
  `;

  for (let pi = 2; pi <= dx + 1; pi++) {
    let old = pk;
    result += `
    <tr>
     <td>P<sub>${pi - 1}</sub> ${pk >= 0 ? ">" : "<"} 0</td>`;
    if (pk < 0) {
      if (swap) y += s2;
      else x += s1;
      pk += 2 * dy;
      result += `
        <td>${x}</td>
        <td>${y}</td>
        <td>(${x}, ${y})</td>
        <td>P<sub>${pi}</sub> = P<sub>${
        pi - 1
      }</sub> + 2dy - 2dx</sub> <br> = ${old} + ${2 * dy} = ${pk}</td>
      </tr>
      `;
    } else {
      x += s1;
      y += s2;
      pk += 2 * dy - 2 * dx;
      result += `
        <td>${x}</td>
        <td>${y}</td>
        <td>(${x}, ${y})</td>
        <td>P<sub>${pi}</sub> = P<sub>${
        pi - 1
      }</sub> + 2dy - 2dx</sub> <br> = ${old} + ${2 * dy} - ${
        2 * dx
      } = ${pk}</td>
      </tr>
      `;
    }
  }

  result += `</table>`;

  document.querySelector("#result").innerHTML = result;
}

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

function dda(x1, y1, x2, y2) {
  let dx = x2 - x1,
    dy = y2 - y1,
    x = x1,
    y = y1;
  let steps = Math.abs(dy) > Math.abs(dx) ? Math.abs(dy) : Math.abs(dx);

  let result = "";
 result += `x1 = ${x1}, y1 = ${y1}, x2 = ${x2}, y2 = ${y2} <br>`;
  result += `Let x = x1 = ${x1} & y = y1 = ${y1} <br>`;
  result += "<br>";
  result += `dx = x2 - x1 = ${x2} - ${x1} = ${dx} <br>`;
  result += `dy = y2 - y1 = ${y2} - ${y1} = ${dy} <br>`;
  result += "<br>";

  if (Math.abs(dy) > Math.abs(dx)) {
    result += `abs(dy) > abs(dx) => ${Math.abs(dy)} > ${Math.abs(dx)} <br>`;
    result += `steps = abs(dy) = ${Math.abs(dy)} <br>`;
  } else {
    result += `abs(dy) < abs(dx) => ${Math.abs(dy)} < ${Math.abs(dx)} <br>`;
    result += `steps = abs(dx) = ${Math.abs(dx)} <br>`;
  }

  let xinc = dx / steps,
    yinc = dy / steps;

  result += "<br>";
  result += `x<sub>inc</sub> = dx/steps = ${dx}/${steps} = ${xinc}, y<sub>inc</sub> = dy/steps = ${dy}/${steps} = ${yinc} <br>`;
  result += "<br>";

  result += `<table>
    <table border=1>
    <tr>
      <th>X</th>
      <th>Y</th>
      <th>Round(X)</th>
      <th>Round(Y)</th>
      <th>Plot (x,y)</th>
    </tr>
    <tr>
      <td>${x}</td>
      <td>${y}</td>
      <td>${Math.round(x * 1000) / 1000}</td>
      <td>${Math.round(y * 1000) / 1000}</td>
      <td>(${x}, ${y})</td>
    </tr>
    `;

  for (let i = 1; i <= steps; i++) {
    x += xinc;
    y += yinc;
    result += `<tr>
    <td>${Math.round(x * 1000) / 1000}</td>
    <td>${Math.round(y * 1000) / 1000}</td>
      <td>${Math.round(x * 1) / 1}</td>
      <td>${Math.round(y * 1) / 1}</td>
      <td>(${Math.round(x * 1) / 1}, ${Math.round(y * 1) / 1})</td>
    </tr>`;
  }

  result += `</tr></table>`;

  document.querySelector("#result").innerHTML = result;
}

let bresenhamBtn = document.getElementById("bresenham");
if (bresenhamBtn != null)
  bresenhamBtn.addEventListener("click", () => {
    let x1 = parseInt(document.getElementById("x1").value),
      y1 = parseInt(document.getElementById("y1").value),
      x2 = parseInt(document.getElementById("x2").value),
      y2 = parseInt(document.getElementById("y2").value);
    bresenham(x1, y1, x2, y2);
  });

let midpointCircleBtn = document.getElementById("midpoint_circle");
if (midpointCircleBtn != null)
  midpointCircleBtn.addEventListener("click", () => {
    let xc = parseInt(document.getElementById("xc").value),
      yc = parseInt(document.getElementById("yc").value),
      r = parseInt(document.getElementById("r").value);
    midpointCircle(xc, yc, r);
  });

let ddaBtn = document.getElementById("dda");
if (ddaBtn != null)
  ddaBtn.addEventListener("click", () => {
    let x1 = parseInt(document.getElementById("x1").value),
      y1 = parseInt(document.getElementById("y1").value),
      x2 = parseInt(document.getElementById("x2").value),
      y2 = parseInt(document.getElementById("y2").value);
    dda(x1, y1, x2, y2);
  });
 
