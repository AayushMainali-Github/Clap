let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
import memory from "../memory/variables.js";
let sVarLength = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function sVarLength at position ${i + 1}`;
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 10] == "(" && validLetters.includes(code[i + 11])) {
    for (let j = i + 11; j < code.length; j++) {
      if (code[j] == ")" && code[j + 1] == ";") {
        let varName = code.slice(i + 11, j);
        let varValue = memory.getVariable(varName);
        if (varValue.status == 999) {
          error();
          break;
        }
        if (varValue.data !== varValue.data.toString()) {
          error();
          break;
        }
        try {
          memory.changeVariable(varName, varValue.data.length);
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
    console.log("a");
    error();
  }
  return returnData;
};

export default sVarLength;
