let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
import variables from "../../../memory/variables.js";
let dVarTime = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function dVarTime at position ${i + 1}`;
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 8] == "(" && validLetters.includes(code[i + 9])) {
    for (let j = i + 9; j < code.length; j++) {
      if (code[j] == ")" && code[j + 1] == ";") {
        let varName = code.slice(i + 9, j);
        let varValue = variables.getVariable(varName);
        if (varValue.status == 999) {
          error();
          break;
        }
        try {
          let dateNow = new Date();
          variables.changeVariable(varName, `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`);
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

export default dVarTime;
