let functions = [
  { name: "changeLine( )", desc: "Changes the cursor of the output to the next line" },
  { name: "clap( )", desc: "Outputs a clap emoji" },
  { name: "getVar(variable)", desc: "Gets the value of the variable" },
  { name: "gotoIfEquals(point,variable)", desc: "Jumps to the given point if the variable is equal to 1" },
  { name: "gotoIfNotEquals(point,variable)", desc: "Jumps to the given point if the variable is not equal to 1" },
  { name: "makeVar(variable,value)", desc: "Creates a variable on the memory and puts a value on it" },
  { name: "nVarAdd(variable1,variable2)", desc: "Add 2 numerical variables and puts the value in the variable1" },
  { name: "nVarDivide(variable1,variable2)", desc: "Divide 2 numerical variables and puts the value in the variable1" },
  { name: "nVarEqualsTo(variable1,variable2)", desc: "If two numerical variables are equal then variable1's value is set to 1 else variable1's value is set to 0" },
  { name: "nVarLessThan(variable1,variable2)", desc: "If variable1 is less than variable2 then variable1's value is set to 1 else variable1's value is set to 0" },
  { name: "nVarMoreThan(variable1,variable2)", desc: "If variable1 is more than variable2 then variable1's value is set to 1 else variable1's value is set to 0" },
  { name: "nVarMultiply(variable1,variable2)", desc: "Multiply 2 numerical variables and puts the value in the variable1" },
  { name: "nVarSubtract(variable1,variable2)", desc: "Subtract 2 numerical variables and puts the value in the variable1" },
  { name: "output(value)", desc: "Outputs any value inside" },
  { name: "setPoint(point)", desc: "Sets a point to use in goto functions" },
  { name: "sVarEqualsTo(variable1,variable2)", desc: "If two string variables are equal then variable1's value is set to 1 else variable1's value is set to 0" },
  { name: "sVarLength(variable)", desc: "Changes the value of variable to its length" },
  { name: "sVarLowerCase(variable)", desc: "Lowercases all the letters of the string" },
  { name: "sVarUpperCase(variable)", desc: "Uppercases all the letters of the string" },
  { name: "varConcat(variable1,variable2)", desc: "Concats 2 string variables and puts the value in the variable1" },
  { name: "varSwap(variable1,variable2)", desc: "Swap 2 variables" },
  { name: "viewMemory( )", desc: "Outputs all the data in the memory" },
  { name: "viewPoints( )", desc: "Outputs all the points in the memory" },
  { name: "viewVariables( )", desc: "Outputs all the variables in the memory" },
];

let examples = [
  { title: "Outputs Hello World", code: 'output("Hello World");' },
  { title: "Creates 2 variables and outputs it", code: `makeVar(a,"Hello");\nmakeVar(b,"World");\noutput(getVar(a));\nchangeLine();\noutput(getVar(b));` },
  { title: "Adds two variables and displays it", code: "makeVar(a,7);\nmakeVar(b,9);\nnVarAdd(a,b);\noutput(getVar(a));" },
  { title: "Concats two variables and displays it", code: 'makeVar(a,"Hello");\nmakeVar(b,"World");\nvarConcat(a,b);\noutput(getVar(a));' },
  { title: "Outputs the length of a string variable", code: 'makeVar(a,"Hello World");\nsVarLength(a);\noutput(getVar(a));' },
  {
    title: "Outputs Hello World 5 times",
    code: 'makeVar(a,6);\nmakeVar(decrement,1);\nsetPoint(p1);\noutput("Hello World");\nchangeLine();\nnVarSubtract(a,decrement);\ngotoIfNotEquals(p1,a);',
  },
  {
    title: "Checks if the number is positive, negative or neutral",
    code: 'makeVar(inp,0); <--- Input\n\nmakeVar(a,getVar(inp));\nmakeVar(b,getVar(inp));\nmakeVar(c,getVar(inp));\n\nmakeVar(d,0);\n\nnVarMoreThan(a,d);\ngotoIfEquals(p1,a);\n\nnVarLessThan(b,d);\ngotoIfEquals(p2,b);\n\nnVarEqualsTo(c,d);\ngotoIfEquals(p3,c);\n\n\nsetPoint(p1);\noutput("Positive");\ngotoIfNotEquals(endPoint,d);\n\nsetPoint(p2);\noutput("Negative");\ngotoIfNotEquals(endPoint,d);\n\nsetPoint(p3);\noutput("Neutral");\ngotoIfNotEquals(endPoint,d);\n\nsetPoint(endPoint);',
  },
];

let funcHTML = "";
for (let i = 0; i < functions.length; i++) {
  funcHTML += `<tr ><th class="fncnames">${functions[i].name}</th> <td>${functions[i].desc}</td></tr>`;
}

document.getElementById("functions").innerHTML = funcHTML;

let exampleHTML = "";
for (let i = 0; i < examples.length; i++) {
  exampleHTML += `<div><b>${i + 1}) ${examples[i].title}</b><br><pre class="codeDes">${examples[i].code}</pre></div>`;
}

document.getElementById("examples").innerHTML = exampleHTML;
