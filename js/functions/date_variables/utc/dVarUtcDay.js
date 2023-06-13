let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
import variables from "../../../memory/variables.js";
let dVarUtcDay = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function dVarUtcDay at position ${i + 1}`;
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 10] == "(" && validLetters.includes(code[i + 11])) {
    for (let j = i + 11; j < code.length; j++) {
      if (code[j] == ")" && code[j + 1] == ";") {
        let varName = code.slice(i + 11, j);
        let varValue = variables.getVariable(varName);
        if (varValue.status == 999) {
          error();
          break;
        }
        try {
          let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          variables.changeVariable(varName, days[new Date().getUTCDay()]);
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

export default dVarUtcDay;
