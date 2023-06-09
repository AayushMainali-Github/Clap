let changeLine = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = "\nAn error occured while running the function changeLine.";
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 10] == "(" && code[i + 11] == ")" && code[i + 12] == ";") {
    returnData.data = "\n";
    returnData.jumpTo = i + 12;
  } else {
    error();
  }
  return returnData;
};

export default changeLine;
