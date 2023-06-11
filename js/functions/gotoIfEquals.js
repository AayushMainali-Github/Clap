let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
import variables from "../memory/variables.js";
import points from "../memory/points.js";

let gotoIfEquals = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function gotoIfEquals at position ${i + 1}`;
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 12] == "(" && validLetters.includes(code[i + 13])) {
    for (let j = i + 13; j < code.length; j++) {
      if (code[j] == ",") {
        let pointName = code.slice(i + 13, j);
        let pointValue = points.getPoint(pointName);
        if (pointValue.status == 999) {
          error();
          break;
        }
        for (let k = j + 1; k < code.length; k++) {
          if (code[k] == ")" && code[k + 1] == ";") {
            let varName = code.slice(j + 1, k);
            let varValue = variables.getVariable(varName);
            if (varValue.status == 999) {
              error();
              j = code.length + 1;
              break;
            }
            if (varValue.data === 1) returnData.jumpTo = pointValue.data;
            else returnData.jumpTo = k + 1;
            returnData.data = "";
            j = code.length + 1;
            break;
          } else {
            error();
          }
        }
      } else {
        error();
      }
    }
  } else {
    error();
  }
  return returnData;
};

export default gotoIfEquals;
