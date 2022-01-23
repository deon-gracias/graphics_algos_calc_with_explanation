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
  result += `Initial Parameter : P<sub>${pi}</sub> = 2dy - dx = 2(${dy}) - ${dy} = ${2 * dy} - ${dx} = ${pk} <br>`;
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
