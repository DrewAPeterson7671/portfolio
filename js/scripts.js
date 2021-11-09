let hidden = ["myHome", "myExperience", "myProjects", "myReferences", "myAbout", "myContact"];

// function toggleHome() {
//   document.getElementById("myHome").style.display = "block";
//   for (let i=1; i < (hidden.length -1); i++) {
//     document.getElementById(hidden[i]).style.display = "none";
//   }
// }

// function toggleExperience() {
//   document.getElementById("myExperience").style.display = "block";
//   for (let i=0; i < hidden.length; i++) {
//     if (i == 1) {
//       continue;
//     }
//     document.getElementById(hidden[i]).style.display = "none";
//   }
// }




function toggleView(section) {
  document.getElementById(section).style.display = "block";
  editHidden = hidden.filter(item => item !== section);
  console.log(editHidden);
  editHidden.forEach( i => {
    console.log(i);
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
  document.getElementById("myNavbar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("myNavbar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}