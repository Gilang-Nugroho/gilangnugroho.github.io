// validation dark mode
let body = document.body;
let darkCounter = 0;

let changeMode = document.getElementById("switchMode");

function darkMode() {
  let changeNavColor = document.getElementById("changeNav");
  changeNavColor.classList.toggle("darkMode");

  let changeText = changeMode.textContent;
  if (changeText == "Dark Mode") {
    changeMode.textContent = "Default";
  } else {
    changeMode.textContent = "Dark Mode";
  }

  let changeHome = document.getElementById("navHome");
  let changeAbout = document.getElementById("navAbout");
  let changeProjects = document.getElementById("navProjects");
  let changeContact = document.getElementById("navContact");

  if (changeHome.classList.contains("chartreuse-text")) {
    changeHome.classList.remove("chartreuse-text");
  } else {
    changeHome.classList.add("chartreuse-text");
  }

  if (changeAbout.classList.contains("chartreuse-text")) {
    changeAbout.classList.remove("chartreuse-text");
  } else {
    changeAbout.classList.add("chartreuse-text");
  }

  if (changeProjects.classList.contains("chartreuse-text")) {
    changeProjects.classList.remove("chartreuse-text");
  } else {
    changeProjects.classList.add("chartreuse-text");
  }

  if (changeContact.classList.contains("chartreuse-text")) {
    changeContact.classList.remove("chartreuse-text");
  } else {
    changeContact.classList.add("chartreuse-text");
  }

  body.classList.toggle("darkMode");
}

// let body = document.body;
// let darkCounter = 0;

// let changeMode = document.getElementById("switchMode");

// function darkMode() {
//   let changeText = changeMode.textContent;

//   if (changeText == "Dark Mode") {
//     changeMode.textContent = "Default";
//   } else {
//     changeMode.textContent = "Dark Mode";
//   }

//   var changeColorText = document.getElementById("navText");
//   if (changeColorText.style.color == "red") {
//     changeColorText.style.color = "black";
//   } else {
//     changeColorText.style.color = "red";
//   }
//   body.classList.toggle("darkMode");
// }
