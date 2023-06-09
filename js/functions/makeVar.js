let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
import functions from "../functions.js";
import memory from "../memory/variables.js";
let makeVar = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = "\nAn error occured while running the function makeVar.";
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 7] == "(" && validLetters.includes(code[i + 8])) {
    for (let j = i + 9; j < code.length; j++) {
      if (code[j] == ",") {
        let varName = code.slice(i + 8, j);
        if (code[j + 1] == '"') {
          for (let k = j + 2; k < code.length; k++) {
            if (code[k] == '"' && code[k + 1] == ")" && code[k + 2] == ";") {
              let varValue = code.slice(j + 2, k);
              let status = memory.addVariable(varName, varValue);
              if (status == 999) {
                error();
                j = code.length + 1;
                break;
              }
              returnData.data = "";
              returnData.jumpTo = k + 2;
              j = code.length + 1;
              break;
            }
          }
        } else if (code.slice(j + 1, j + 7) == "getVar") {
          if (code[j + 7] == "(") {
            for (let k = j + 8; k < code.length; k++) {
              if (code[k] == ")" && code[k + 1] == ")" && code[k + 2] == ";") {
                let varValue = functions.getVar(code, j + 1);
                if (varValue.data.status && varValue.data.status == 100) {
                  let status = memory.addVariable(varName, varValue.data.data);
                  if (status == 999) {
                    error();
                    j = code.length + 1;
                    break;
                  }
                  returnData.data = "";
                  returnData.jumpTo = k + 2;
                  j = code.length + 1;
                  break;
                } else {
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
        } else {
          for (let k = j + 1; k < code.length; k++) {
            if (code[k] == ")" && code[k + 1] == ";") {
              let varValue = code.slice(j + 1, k);
              try {
                let status = memory.addVariable(varName, math.evaluate(varValue));
                if (status == 999) {
                  error();
                  j = code.length + 1;
                  break;
                }
              } catch (err) {
                error();
                j = code.length + 1;
                break;
              }
              returnData.data = "";
              returnData.jumpTo = k + 1;
              j = code.length + 1;
              break;
            }
          }
        }
      } else if (!validLetters.includes(code[j])) {
        error();
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

export default makeVar;
