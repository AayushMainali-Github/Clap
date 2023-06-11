let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
import points from "../memory/points.js";

let setPoint = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function setPoint at position ${i + 1}`;
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 8] == "(" && validLetters.includes(code[i + 9])) {
    for (let j = i + 9; j < code.length; j++) {
      if (code[j] == ")" && code[j + 1] == ";") {
        let pointName = code.slice(i + 9, j);
        let status = points.addPoint(pointName, j + 1);
        if (status == 999) {
          error();
          break;
        }
        returnData.data = "";
        returnData.jumpTo = j + 1;
        break;
      } else {
        error();
      }
    }
  } else {
    error();
  }
  return returnData;
};

export default setPoint;
