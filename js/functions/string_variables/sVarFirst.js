let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
import variables from "../../memory/variables.js";
let sVarFirst = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function sVarFirst at position ${i + 1}`;
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 9] == "(" && validLetters.includes(code[i + 10])) {
    for (let j = i + 10; j < code.length; j++) {
      if (code[j] == ")" && code[j + 1] == ";") {
        let varName = code.slice(i + 10, j);
        let varValue = variables.getVariable(varName);
        if (varValue.status == 999) {
          error();
          break;
        }
        if (varValue.data !== varValue.data.toString()) {
          error();
          break;
        }
        try {
          variables.changeVariable(varName, varValue.data[0]);
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

export default sVarFirst;
