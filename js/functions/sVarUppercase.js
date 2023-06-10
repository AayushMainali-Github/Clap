import memory from "../memory/variables.js";
let sVarUppercase = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = "\nAn error occured while running the function sVarUppercase";
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 13] == "(") {
    for (let j = i + 14; j < code.length; j++) {
      if (code[j] == ")" && code[j + 1] == ";") {
        let varName = code.slice(i + 14, j);
        let varValue = memory.getVariable(varName);
        if (varValue.status == 999) {
          error();
          break;
        }
        try {
          memory.changeVariable(varName, varValue.data.toUpperCase());
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

export default sVarUppercase;
