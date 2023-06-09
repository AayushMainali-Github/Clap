import memory from "../memory/variables.js";
let viewMemory = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = "\nAn error occured while running the function viewMemory.";
    returnData.jumpTo = code.length + 1;
  };
  returnData.data = "";
  if (code[i + 10] == "(" && code[i + 11] == ")" && code[i + 12] == ";") {
    let variables = memory.getAllVariable();
    let variablesKeys = Object.keys(variables);
    for (let j = 0; j < variablesKeys.length; j++) {
      returnData.data += `${variablesKeys[j]} = ${variables[variablesKeys[j]]}\n`;
    }
    returnData.jumpTo = i + 12;
  } else {
    error();
  }
  return returnData;
};

export default viewMemory;
