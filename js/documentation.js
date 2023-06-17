import functions from "../json/docsFunctions.json" assert { type: "json" };
import examples from "../json/docsExamples.json" assert { type: "json" };

let funcHTML = "";
for (let i = 0; i < functions.length; i++) {
  funcHTML += `
  <div id="funcHead">${functions[i].type}:</div>
  <table>
  `;
  for (let j = 0; j < functions[i].functions.length; j++) {
    funcHTML += `<tr ><th class="fncnames">${functions[i].functions[j].name}</th> <td>${functions[i].functions[j].desc}</td></tr>`;
  }
  funcHTML += `</table>`;
}

document.getElementById("functions").innerHTML = funcHTML;

let exampleHTML = "";
for (let i = 0; i < examples.length; i++) {
  exampleHTML += `<div><b>${i + 1}) ${examples[i].title}</b><br><pre class="codeDes">${examples[i].code}</pre></div>`;
}

document.getElementById("examples").innerHTML = exampleHTML;
