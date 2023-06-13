let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
import variables from "../../../memory/variables.js";
let dVarUtcMonth = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function dVarUtcMonth at position ${i + 1}`;
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 12] == "(" && validLetters.includes(code[i + 13])) {
    for (let j = i + 13; j < code.length; j++) {
      if (code[j] == ")" && code[j + 1] == ";") {
        let varName = code.slice(i + 13, j);
        let varValue = variables.getVariable(varName);
        if (varValue.status == 999) {
          error();
          break;
        }
        try {
          variables.changeVariable(varName, new Date().getUTCMonth());
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

export default dVarUtcMonth;
