let functions = [
  { name: "changeLine( )", desc: "Changes the cursor of the output to the next line" },
  { name: "clap( )", desc: "Outputs a clap emoji" },
  { name: "getVar(variable)", desc: "Gets the value of the variable" },
  { name: "makeVar(variable,value)", desc: "Creates a variable on the memory and puts a value on it" },
  { name: "nVarAdd(variable1,variable2)", desc: "Add 2 numerical variables and puts the value in the variable1" },
  { name: "nVarDivide(variable1,variable2)", desc: "Divide 2 numerical variables and puts the value in the variable1" },
  { name: "nVarMultiply(variable1,variable2)", desc: "Multiply 2 numerical variables and puts the value in the variable1" },
  { name: "nVarSubtract(variable1,variable2)", desc: "Subtract 2 numerical variables and puts the value in the variable1" },
  { name: "nVarSwap(variable1,variable2)", desc: "Swap 2 variables" },
  { name: "output(value)", desc: "Outputs any value inside." },
  { name: "sVarAdd(variable1,variable2)", desc: "Concats 2 string variables and puts the value in the variable1" },
  { name: "viewMemory( )", desc: "Outputs all the variables in the memory" },
];

let examples = [
  { title: "Outputs Hello World", code: 'output("Hello World");' },
  { title: "Creates 2 variables and outputs it", code: `makeVar(a,"Hello");\nmakeVar(b,"World");\noutput(getVar(a));\nchangeLine();\noutput(getVar(b));` },
  { title: "Adds two variables and displays it", code: "makeVar(a,7);\nmakeVar(b,9);\nnVarAdd(a,b);\noutput(getVar(a));" },
  { title: "Concats two variables and displays it", code: 'makeVar(a,"Hello");\nmakeVar(b,"World");\nsVarAdd(a,b);\noutput(getVar(a));' },
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
