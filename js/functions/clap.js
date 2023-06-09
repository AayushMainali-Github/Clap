let clap = (code, i) => {
  let returnData = {};
  if (code[i + 4] == "(" && code[i + 5] == ")" && code[i + 6] == ";") {
    returnData.data = "👏";
    returnData.jumpTo = i + 6;
  } else {
    returnData.data = "\nAn error occured.";
    returnData.jumpTo = code.length + 1;
  }
  return returnData;
};

export default clap;
