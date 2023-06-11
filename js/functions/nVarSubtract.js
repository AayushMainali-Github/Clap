let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
import memory from "../memory/variables.js";

let nVarSubtract = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function nVarSubtract at position ${i + 1}`;
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 12] == "(" && validLetters.includes(code[i + 13])) {
    for (let j = i + 13; j < code.length; j++) {
      if (code[j] == ",") {
        let var1name = code.slice(i + 13, j);
        let var1value = memory.getVariable(var1name);
        if (var1value.status == 999) {
          error();
          break;
        }
        for (let k = j + 1; k < code.length; k++) {
          if (code[k] == ")" && code[k + 1] == ";") {
            let var2name = code.slice(j + 1, k);
            let var2value = memory.getVariable(var2name);
            if (var2value.status == 999) {
              error();
              j = code.length + 1;
              break;
            }
            try {
              let nVarValue = math.evaluate(`${var1value.data}-${var2value.data}`);
              memory.changeVariable(var1name, nVarValue);
              returnData.data = "";
              returnData.jumpTo = k + 1;
              j = code.length + 1;
              break;
            } catch (e) {
              error();
              j = code.length + 1;
              break;
            }
          } else {
            error();
          }
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

export default nVarSubtract;
