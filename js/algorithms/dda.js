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