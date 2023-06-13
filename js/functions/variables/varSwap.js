let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
import variables from "../../memory/variables.js";

let varSwap = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function varSwap at position ${i + 1}`;
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 7] == "(" && validLetters.includes(code[i + 8])) {
    for (let j = i + 8; j < code.length; j++) {
      if (code[j] == ",") {
        let var1name = code.slice(i + 8, j);
        let var1value = variables.getVariable(var1name);
        if (var1value.status == 999) {
          error();
          break;
        }
        for (let k = j + 1; k < code.length; k++) {
          if (code[k] == ")" && code[k + 1] == ";") {
            let var2name = code.slice(j + 1, k);
            let var2value = variables.getVariable(var2name);
            if (var2value.status == 999) {
              error();

              j = code.length + 1;
              break;
            }
            variables.changeVariable(var1name, var2value.data);
            variables.changeVariable(var2name, var1value.data);
            returnData.data = "";
            returnData.jumpTo = k + 1;
            j = code.length + 1;
            break;
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

export default varSwap;
