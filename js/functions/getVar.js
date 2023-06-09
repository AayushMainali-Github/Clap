import memory from "../memory/variables.js";
let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
let getVar = (code, i) => {
  let returnData = {};
  if (code[i + 6] == "(" && validLetters.includes(code[i + 7])) {
    for (let j = i + 8; j < code.length; j++) {
      if (code[j] == ")") {
        let varName = code.slice(i + 7, j);
        let varValue = memory.getVariable(varName);
        if (varValue.status == 999) {
          console.log("A");
          returnData.data = "\nAn error occured.";
          returnData.jumpTo = code.length + 1;
          break;
        }
        returnData.data = varValue;
        returnData.jumpTo = j;
        break;
      } else {
        returnData.data = "\nAn error occured.";
        returnData.jumpTo = code.length + 1;
      }
    }
  } else {
    returnData.data = "\nAn error occured.";
    returnData.jumpTo = code.length + 1;
  }
  return returnData;
};

export default getVar;
