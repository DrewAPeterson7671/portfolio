let hidden = ["myHome", "myExperience", "myProjects", "myReferences", "myAbout", "myContact"];

function toggleView(section) {
  document.getElementById(section).style.display = "block";
  editHidden = hidden.filter(item => item !== section);
  console.log(editHidden);
  editHidden.forEach( i => {
    document.getElementById(i).style.display = "none";
  });
}

const home = document.getElementById("home");
home.addEventListener("click", () => { toggleView("myHome"); }, false);

const experience = document.getElementById("experience");
experience.addEventListener("click", () => { toggleView("myExperience"); }, false);

const myProjects = document.getElementById("projects");
myProjects.addEventListener("click", () => { toggleView("myProjects"); }, false);

const references = document.getElementById("references");
references.addEventListener("click", () => { toggleView("myReferences"); }, false);

const about = document.getElementById("about");
about.addEventListener("click", () => { toggleView("myAbout"); }, false)

const contact = document.getElementById("contact");
contact.addEventListener("click", () => { toggleView("myContact"); }, false);


function openNav() {
  document.getElementById("myNavbar").style.width = "155px";
  // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("myNavbar").style.width = "0";
  // document.getElementById("main").style.marginLeft = "0";
}

function responsiveNav() {
  let menuStateCheck = document.getElementById("myNavbar");
  if (menuStateCheck.style.width == "155px") {
    closeNav();
  } else {
    openNav();
  }
}




