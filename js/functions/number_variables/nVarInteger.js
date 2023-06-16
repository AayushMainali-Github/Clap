let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
import variables from "../../memory/variables.js";
let nVarInteger = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function nVarInteger at position ${i + 1}`;
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
          variables.changeVariable(varName, Math.trunc(varValue.data));
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

export default nVarInteger;
