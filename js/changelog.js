let changelog = [
  {
    version: "Version 0.0.2",
    changes: [
      "Changed function sVarAdd to varConcat",
      "Changed function nVarSwap to varSwap",
      "Fixed some css for the changelog page",
      "Changed some minor css in the documentation page",
    ],
  },
  {
    version: "Version 0.0.1",
    changes: [
      "Laid basic code base for the language",
      "Added new functions : changeLine, clap, getVar, makeVar, nVarAdd, nVarDivide, nVarMultiply, nVarSubtract, nVarSwap, output, sVarAdd, viewMemory",
      "Desgined a basic interface for the website",
    ],
  },
];

let changelogHTML = "";

for (let i = 0; i < changelog.length; i++) {
  changelogHTML += `<div><div class="chngVer">${changelog[i].version}</div><ul>`;
  for (let j = 0; j < changelog[i].changes.length; j++) {
    changelogHTML += `<li>${changelog[i].changes[j]}</li>`;
  }
  changelogHTML += "</ul></div>";
}

document.getElementById("changelog").innerHTML = changelogHTML;
