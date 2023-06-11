import functions from "../functions.js";

let output = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function output at position ${i + 1}`;
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 6] == "(") {
    //string
    if (code[i + 7] == '"') {
      for (let j = i + 8; j < code.length; j++) {
        if (code[j] == '"' && code[j + 1] == ")" && code[j + 2] == ";") {
          returnData.data = code.slice(i + 8, j);
          returnData.jumpTo = j + 2;
          break;
        } else {
          error();
        }
      }
    }
    //getVar
    else if (code.slice(i + 7, i + 13) == "getVar") {
      if (code[i + 13] == "(") {
        for (let j = i + 14; j < code.length; j++) {
          if (code[j] == ")" && code[j + 1] == ")" && code[j + 2] == ";") {
            let varValue = functions.getVar(code, i + 7);
            if (varValue.data.status && varValue.data.status == 100) {
              returnData.data = varValue.data.data;
              returnData.jumpTo = j + 2;
            } else {
              returnData.data = varValue.data;
              returnData.jumpTo = code.length + 1;
            }
            break;
          } else {
            error();
          }
        }
      } else {
        error();
      }
    }
    //numbers or getVar
    else {
      if (i + 7 === code.length) {
        error();
      } else {
        for (let j = i + 7; j < code.length; j++) {
          if (code[j] == ")" && code[j + 1] == ";") {
            try {
              returnData.data = math.evaluate(code.slice(i + 7, j));
              returnData.jumpTo = j + 1;
              break;
            } catch (err) {
              error();
              break;
            }
          } else {
            error();
          }
        }
      }
    }
  } else {
    error();
  }

  return returnData;
};

export default output;
