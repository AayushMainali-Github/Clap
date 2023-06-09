import functions from "./functions.js";
import memory from "./memory/variables.js";
let run = () => {
  let startTime = new Date().getTime();

  memory.removeAllVariable();

  let code = document.getElementById("codeinp").value;
  let outputData = "";
  for (let i = 0; i < code.length; i++) {
    let data = {
      data: "",
      jumpTo: i,
    };

    if (code.slice(i, i + 10) == "changeLine") data = functions.changeLine(code, i);
    else if (code.slice(i, i + 4) == "clap") data = functions.clap(code, i);
    else if (code.slice(i, i + 7) == "makeVar") data = functions.makeVar(code, i);
    else if (code.slice(i, i + 7) == "nVarAdd") data = functions.nVarAdd(code, i);
    else if (code.slice(i, i + 10) == "nVarDivide") data = functions.nVarDivide(code, i);
    else if (code.slice(i, i + 12) == "nVarMultiply") data = functions.nVarMultiply(code, i);
    else if (code.slice(i, i + 12) == "nVarSubtract") data = functions.nVarSubtract(code, i);
    else if (code.slice(i, i + 6) == "output") data = functions.output(code, i);
    else if (code.slice(i, i + 9) == "varConcat") data = functions.varConcat(code, i);
    else if (code.slice(i, i + 7) == "varSwap") data = functions.varSwap(code, i);
    else if (code.slice(i, i + 10) == "viewMemory") data = functions.viewMemory(code, i);

    outputData += data.data;
    i = data.jumpTo;
  }

  let endTime = new Date().getTime();
  let runTime = (endTime - startTime) / 1000;
  outputData += `\nThe program took ${runTime} seconds to run.`;
  document.getElementById("codeout").value = outputData;
};

document.getElementById("run").addEventListener("click", run);
