let changeCode = () => {
  document.getElementById("code").style.display = "flex";
  document.getElementById("documentation").style.display = "none";
  document.getElementById("changelog").style.display = "none";
  document.getElementById("navCode").style.color = "white";
  document.getElementById("navDocs").style.color = "rgb(124, 118, 118)";
  document.getElementById("navChng").style.color = "rgb(124, 118, 118)";
};
let changeDocumentation = () => {
  document.getElementById("code").style.display = "none";
  document.getElementById("documentation").style.display = "flex";
  document.getElementById("changelog").style.display = "none";
  document.getElementById("navCode").style.color = "rgb(124, 118, 118)";
  document.getElementById("navDocs").style.color = "white";
  document.getElementById("navChng").style.color = "rgb(124, 118, 118)";
};
let changeChangelog = () => {
  document.getElementById("code").style.display = "none";
  document.getElementById("documentation").style.display = "none";
  document.getElementById("changelog").style.display = "flex";
  document.getElementById("navCode").style.color = "rgb(124, 118, 118)";
  document.getElementById("navDocs").style.color = "rgb(124, 118, 118)";
  document.getElementById("navChng").style.color = "white";
};
