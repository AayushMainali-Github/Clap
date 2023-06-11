import variable from "../memory/variables.js";
let viewVariables = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function viewVariables at position ${i + 1}`;
    returnData.jumpTo = code.length + 1;
  };
  returnData.data = "Variables:\n";
  if (code[i + 13] == "(" && code[i + 14] == ")" && code[i + 15] == ";") {
    let variables = variable.getAllVariable();
    let variablesKeys = Object.keys(variables);
    for (let j = 0; j < variablesKeys.length; j++) {
      returnData.data += `${variablesKeys[j]} = ${variables[variablesKeys[j]]}\n`;
    }
    returnData.jumpTo = i + 15;
  } else {
    error();
  }
  return returnData;
};

export default viewVariables;
