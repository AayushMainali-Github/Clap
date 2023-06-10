let changelog = [
  {
    version: "Version 0.1.4",
    changes: ["Added new function sVarLength.", "Added some more examples to the documentation page.", "Some CSS changes to the documentation page."],
  },
  {
    version: "Version 0.1.3",
    changes: ["Changed function viewMemory to viewVariables."],
  },
  {
    version: "Version 0.1.2",
    changes: ["Added new function sVarEqualsTo."],
  },
  {
    version: "Version 0.1.1",
    changes: ["Added new function nVarEqualsTo.", "Added new function nVarLessThan.", "Added new function nVarMoreThan.", "Some changes to the changelog page."],
  },
  {
    version: "Version 0.1.0",
    changes: ["The site is responsive now."],
  },
  {
    version: "Version 0.0.4",
    changes: ["Added new function sVarLowercase.", "Added new function sVarUppercase.", "The scrollbar is now hidden."],
  },
  {
    version: "Version 0.0.3",
    changes: [
      "Changes to the error displaying system. Now it outputs which function had the error.",
      "Minor grammatical changes to the changelog page.",
      "Changed some minor CSS in the documentation and changelog page.",
    ],
  },
  {
    version: "Version 0.0.2",
    changes: [
      "Changed function sVarAdd to varConcat.",
      "Changed function nVarSwap to varSwap.",
      "Fixed some CSS for the changelog page.",
      "Changed some minor CSS in the documentation page.",
    ],
  },
  {
    version: "Version 0.0.1",
    changes: [
      "Laid basic code base for the language.",
      "Added new function changeLine.",
      "Added new function clap.",
      "Added new function getVar",
      "Added new function makeVar.",
      "Added new function nVarAdd.",
      "Added new function nVarDivide.",
      "Added new function nVarMultiply.",
      "Added new function nVarSubtract.",
      "Added new function nVarSwap.",
      "Added new function output.",
      "Added new function sVarAdd.",
      "Added new function viewMemory.",
      "Desgined a basic interface for the website.",
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
