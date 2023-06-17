import changelog from "../json/changelog.json" assert { type: "json" };

let changelogHTML = "";

for (let i = 0; i < changelog.length; i++) {
  changelogHTML += `<div><div class="chngVer">${changelog[i].version}</div><ul>`;
  for (let j = 0; j < changelog[i].changes.length; j++) {
    changelogHTML += `<li>${changelog[i].changes[j]}</li>`;
  }
  changelogHTML += "</ul></div>";
}

document.getElementById("changelog").innerHTML = changelogHTML;
