import functions from "./functions.js";
import variables from "./memory/variables.js";
import points from "./memory/points.js";
let run = () => {
  let startTime = new Date().getTime();

  variables.removeAllVariable();
  points.removeAllPoint();

  let code = document.getElementById("codeinp").value;
  let outputData = "";

  for (let i = 0; i < code.length; i++) {
    let data = {
      data: "",
      jumpTo: i,
    };

    if (code.slice(i, i + 8) == "setPoint") data = functions.setPoint(code, i);

    outputData += data.data;
    i = data.jumpTo;
  }

  for (let i = 0; i < code.length; i++) {
    let data = {
      data: "",
      jumpTo: i,
    };

    //date_variables_normal
    if (code.slice(i, i + 8) == "dVarDate") data = functions.dVarDate(code, i);
    else if (code.slice(i, i + 7) == "dVarDay") data = functions.dVarDay(code, i);
    else if (code.slice(i, i + 8) == "dVarFull") data = functions.dVarFull(code, i);
    else if (code.slice(i, i + 8) == "dVarHour") data = functions.dVarHour(code, i);
    else if (code.slice(i, i + 15) == "dVarMillisecond") data = functions.dVarMillisecond(code, i);
    else if (code.slice(i, i + 10) == "dVarMinute") data = functions.dVarMinute(code, i);
    else if (code.slice(i, i + 9) == "dVarMonth") data = functions.dVarMonth(code, i);
    else if (code.slice(i, i + 10) == "dVarSecond") data = functions.dVarSecond(code, i);
    else if (code.slice(i, i + 8) == "dVarTime") data = functions.dVarTime(code, i);
    else if (code.slice(i, i + 8) == "dVarUnix") data = functions.dVarUnix(code, i);
    else if (code.slice(i, i + 8) == "dVarYear") data = functions.dVarYear(code, i);
    //date_variables_utc
    else if (code.slice(i, i + 11) == "dVarUtcDate") data = functions.dVarUtcDate(code, i);
    else if (code.slice(i, i + 10) == "dVarUtcDay") data = functions.dVarUtcDay(code, i);
    else if (code.slice(i, i + 11) == "dVarUtcFull") data = functions.dVarUtcFull(code, i);
    else if (code.slice(i, i + 11) == "dVarUtcHour") data = functions.dVarUtcHour(code, i);
    else if (code.slice(i, i + 13) == "dVarUtcMinute") data = functions.dVarUtcMinute(code, i);
    else if (code.slice(i, i + 12) == "dVarUtcMonth") data = functions.dVarUtcMonth(code, i);
    else if (code.slice(i, i + 13) == "dVarUtcSecond") data = functions.dVarUtcSecond(code, i);
    else if (code.slice(i, i + 11) == "dVarUtcTime") data = functions.dVarUtcTime(code, i);
    else if (code.slice(i, i + 11) == "dVarUtcYear") data = functions.dVarUtcYear(code, i);
    //goto
    else if (code.slice(i, i + 12) == "gotoIfEquals") data = functions.gotoIfEquals(code, i);
    else if (code.slice(i, i + 15) == "gotoIfNotEquals") data = functions.gotoIfNotEquals(code, i);
    //memory
    else if (code.slice(i, i + 10) == "viewMemory") data = functions.viewMemory(code, i);
    else if (code.slice(i, i + 10) == "viewPoints") data = functions.viewPoints(code, i);
    else if (code.slice(i, i + 13) == "viewVariables") data = functions.viewVariables(code, i);
    //number_variables
    else if (code.slice(i, i + 7) == "nVarAdd") data = functions.nVarAdd(code, i);
    else if (code.slice(i, i + 10) == "nVarDivide") data = functions.nVarDivide(code, i);
    else if (code.slice(i, i + 12) == "nVarEqualsTo") data = functions.nVarEqualsTo(code, i);
    else if (code.slice(i, i + 12) == "nVarLessThan") data = functions.nVarLessThan(code, i);
    else if (code.slice(i, i + 12) == "nVarMoreThan") data = functions.nVarMoreThan(code, i);
    else if (code.slice(i, i + 12) == "nVarMultiply") data = functions.nVarMultiply(code, i);
    else if (code.slice(i, i + 12) == "nVarSubtract") data = functions.nVarSubtract(code, i);
    //others
    else if (code.slice(i, i + 10) == "changeLine") data = functions.changeLine(code, i);
    else if (code.slice(i, i + 4) == "clap") data = functions.clap(code, i);
    else if (code.slice(i, i + 6) == "output") data = functions.output(code, i);
    //string_variables
    else if (code.slice(i, i + 12) == "sVarEqualsTo") data = functions.sVarEqualsTo(code, i);
    else if (code.slice(i, i + 9) == "sVarFirst") data = functions.sVarFirst(code, i);
    else if (code.slice(i, i + 8) == "sVarLast") data = functions.sVarLast(code, i);
    else if (code.slice(i, i + 10) == "sVarLength") data = functions.sVarLength(code, i);
    else if (code.slice(i, i + 13) == "sVarLowerCase") data = functions.sVarLowerCase(code, i);
    else if (code.slice(i, i + 13) == "sVarUpperCase") data = functions.sVarUpperCase(code, i);
    //variables
    else if (code.slice(i, i + 7) == "makeVar") data = functions.makeVar(code, i);
    else if (code.slice(i, i + 9) == "varConcat") data = functions.varConcat(code, i);
    else if (code.slice(i, i + 7) == "varSwap") data = functions.varSwap(code, i);

    outputData += data.data;
    i = data.jumpTo;
  }

  let endTime = new Date().getTime();
  let runTime = (endTime - startTime) / 1000;
  outputData += `\nThe program took ${runTime} seconds to run.`;
  document.getElementById("codeout").value = outputData;
};

document.getElementById("run").addEventListener("click", run);
