let clap = (code, i) => {
  let returnData = {};
  let error = () => {
    returnData.data = `\nAn error occured while running the function clap at position ${i + 1}`;
    returnData.jumpTo = code.length + 1;
  };
  if (code[i + 4] == "(" && code[i + 5] == ")" && code[i + 6] == ";") {
    returnData.data = "👏";
    returnData.jumpTo = i + 6;
  } else {
    error();
  }
  return returnData;
};

export default clap;
