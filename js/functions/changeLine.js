let changeLine = (code, i) => {
  let returnData = {};
  if (code[i + 10] == "(" && code[i + 11] == ")" && code[i + 12] == ";") {
    returnData.data = "\n";
    returnData.jumpTo = i + 12;
  } else {
    returnData.data = "\nAn error occured.";
    returnData.jumpTo = code.length + 1;
  }
  return returnData;
};

export default changeLine;
