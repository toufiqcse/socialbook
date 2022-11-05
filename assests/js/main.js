//settings-menu
var settingsMenu = document.querySelector(".settings-menu"); //profile-menuu-settings-menu
var darkBtn = document.getElementById("dark-btn"); //dark-btn

function settingsMenuToggle() {
  //settings-menu
  settingsMenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function () {
  //dark-theme
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  //check the light or dark from user first time
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

//also check the dark and light theme for fixed
if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
