import variable from "../memory/variables.js";
import point from "../memory/points.js";
let viewMemory = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function viewMemory at position ${i + 1}`;
    returnData.jumpTo = code.length + 1;
  };
  returnData.data = "";
  if (code[i + 10] == "(" && code[i + 11] == ")" && code[i + 12] == ";") {
    returnData.data += "Variables:\n";
    let variables = variable.getAllVariable();
    let variablesKeys = Object.keys(variables);
    for (let j = 0; j < variablesKeys.length; j++) {
      returnData.data += `${variablesKeys[j]} = ${variables[variablesKeys[j]]}\n`;
    }

    returnData.data += "Points:\n";
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

export default viewMemory;
