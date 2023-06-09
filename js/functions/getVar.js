import memory from "../memory/variables.js";
let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
let getVar = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = "\nAn error occured while running the function getVar.";
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 6] == "(" && validLetters.includes(code[i + 7])) {
    for (let j = i + 8; j < code.length; j++) {
      if (code[j] == ")") {
        let varName = code.slice(i + 7, j);
        let varValue = memory.getVariable(varName);
        if (varValue.status == 999) {
          error();
          break;
        }
        returnData.data = varValue;
        returnData.jumpTo = j;
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

export default getVar;
