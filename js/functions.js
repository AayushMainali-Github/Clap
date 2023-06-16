//date_variables
//normal
import dVarDate from "./functions/date_variables/normal/dVarDate.js";
import dVarDay from "./functions/date_variables/normal/dVarDay.js";
import dVarFull from "./functions/date_variables/normal/dVarFull.js";
import dVarHour from "./functions/date_variables/normal/dVarHour.js";
import dVarMillisecond from "./functions/date_variables/normal/dVarMillisecond.js";
import dVarMinute from "./functions/date_variables/normal/dVarMinute.js";
import dVarMonth from "./functions/date_variables/normal/dVarMonth.js";
import dVarSecond from "./functions/date_variables/normal/dVarSecond.js";
import dVarTime from "./functions/date_variables/normal/dVarTime.js";
import dVarUnix from "./functions/date_variables/normal/dVarUnix.js";
import dVarYear from "./functions/date_variables/normal/dVarYear.js";
//utc
import dVarUtcDate from "./functions/date_variables/utc/dVarUtcDate.js";
import dVarUtcDay from "./functions/date_variables/utc/dVarUtcDay.js";
import dVarUtcFull from "./functions/date_variables/utc/dVarUtcFull.js";
import dVarUtcHour from "./functions/date_variables/utc/dVarUtcHour.js";
import dVarUtcMinute from "./functions/date_variables/utc/dVarUtcMinute.js";
import dVarUtcMonth from "./functions/date_variables/utc/dVarUtcMonth.js";
import dVarUtcSecond from "./functions/date_variables/utc/dVarUtcSecond.js";
import dVarUtcTime from "./functions/date_variables/utc/dVarUtcTime.js";
import dVarUtcYear from "./functions/date_variables/utc/dVarUtcYear.js";

//goto
import gotoIfEquals from "./functions/goto/gotoIfEquals.js";
import gotoIfNotEquals from "./functions/goto/gotoIfNotEquals.js";
import setPoint from "./functions/goto/setPoint.js";

//memory
import viewMemory from "./functions/memory/viewMemory.js";
import viewPoints from "./functions/memory/viewPoints.js";
import viewVariables from "./functions/memory/viewVariables.js";

//number_variables
import nVarAdd from "./functions/number_variables/nVarAdd.js";
import nVarDecimal from "./functions/number_variables/nVarDecimal.js";
import nVarDivide from "./functions/number_variables/nVarDivide.js";
import nVarEqualsTo from "./functions/number_variables/nVarEqualsTo.js";
import nVarInteger from "./functions/number_variables/nVarInteger.js";
import nVarLessThan from "./functions/number_variables/nVarLessThan.js";
import nVarMoreThan from "./functions/number_variables/nVarMoreThan.js";
import nVarMultiply from "./functions/number_variables/nVarMultiply.js";
import nVarSubtract from "./functions/number_variables/nVarSubtract.js";

//others
import changeLine from "./functions/others/changeLine.js";
import clap from "./functions/others/clap.js";
import output from "./functions/others/output.js";

//string_variables
import sVarEqualsTo from "./functions/string_variables/sVarEqualsTo.js";
import sVarFirst from "./functions/string_variables/sVarFirst.js";
import sVarLast from "./functions/string_variables/sVarLast.js";
import sVarLength from "./functions/string_variables/sVarLength.js";
import sVarLowerCase from "./functions/string_variables/sVarLowerCase.js";
import sVarRepeat from "./functions/string_variables/sVarRepeat.js";
import sVarUpperCase from "./functions/string_variables/sVarUpperCase.js";

//variables
import getVar from "./functions/variables/getVar.js";
import makeVar from "./functions/variables/makeVar.js";
import varConcat from "./functions/variables/varConcat.js";
import varSwap from "./functions/variables/varSwap.js";

export default {
  //date_variables
  //normal
  dVarDate,
  dVarDay,
  dVarFull,
  dVarHour,
  dVarMillisecond,
  dVarMinute,
  dVarMonth,
  dVarSecond,
  dVarTime,
  dVarUnix,
  dVarYear,
  //utc
  dVarUtcDate,
  dVarUtcDay,
  dVarUtcFull,
  dVarUtcHour,
  dVarUtcMinute,
  dVarUtcMonth,
  dVarUtcSecond,
  dVarUtcTime,
  dVarUtcYear,

  //goto
  gotoIfEquals,
  gotoIfNotEquals,
  setPoint,

  //memory
  viewMemory,
  viewPoints,
  viewVariables,

  //number_variables
  nVarAdd,
  nVarDecimal,
  nVarDivide,
  nVarEqualsTo,
  nVarInteger,
  nVarLessThan,
  nVarMoreThan,
  nVarMultiply,
  nVarSubtract,

  //others
  changeLine,
  clap,
  output,

  //string_variables
  sVarEqualsTo,
  sVarFirst,
  sVarLast,
  sVarLength,
  sVarLowerCase,
  sVarRepeat,
  sVarUpperCase,

  //variables
  getVar,
  makeVar,
  varConcat,
  varSwap,
};
