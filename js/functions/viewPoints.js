import point from "../memory/points.js";
let viewPoints = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function viewPoints at position ${i + 1}`;
    returnData.jumpTo = code.length + 1;
  };
  returnData.data = "Points:\n";
  if (code[i + 10] == "(" && code[i + 11] == ")" && code[i + 12] == ";") {
    let points = point.getAllPoint();
    let pointsKeys = Object.keys(points);
    for (let j = 0; j < pointsKeys.length; j++) {
      returnData.data += `${pointsKeys[j]} = ${points[pointsKeys[j]]}\n`;
    }
    returnData.jumpTo = i + 12;
  } else {
    error();
  }
  return returnData;
};

export default viewPoints;
