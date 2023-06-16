let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
import variables from "../../memory/variables.js";
let nVarDecimal = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function nVarDecimal at position ${i + 1}`;
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 11] == "(" && validLetters.includes(code[i + 12])) {
    for (let j = i + 12; j < code.length; j++) {
      if (code[j] == ")" && code[j + 1] == ";") {
        let varName = code.slice(i + 12, j);
        let varValue = variables.getVariable(varName);
        if (varValue.status == 999) {
          error();
          break;
        }
        if (varValue.data !== Number(varValue.data)) {
          error();
          break;
        }
        try {
          let decimalPart = varValue.data - Math.trunc(varValue.data);
          if (varValue.data.toString().includes(".")) {
            let decimalLength = varValue.data.toString().split(".")[1].length;
            variables.changeVariable(varName, decimalPart.toFixed(decimalLength));
          } else {
            variables.changeVariable(varName, 0);
          }
          returnData.data = "";
          returnData.jumpTo = j + 1;
          break;
        } catch (e) {
          error();
          break;
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

export default nVarDecimal;
