let hidden = ["myHome", "myExperience", "myProjects", "myReferences", "myAbout", "myContact"];

let menuMargin = "155px";

function toggleView(section) {
  document.getElementById(section).style.display = "block";
  editHidden = hidden.filter(item => item !== section);
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
  document.getElementById("myNavbar").style.width = menuMargin;
  document.getElementById("closeBtn").style.display = "block";
  document.getElementById("openBtn").style.display = "none";
}

function closeNav() {
  document.getElementById("myNavbar").style.width = "0";
  document.getElementById("closeBtn").style.display = "none";
  document.getElementById("openBtn").style.display = "block";
}

function responsiveNav() {
  let menuStateCheck = document.getElementById("myNavbar");
  if (menuStateCheck.style.width == "155px") {
    closeNav();
  } else {
    openNav();
  }
}

function mediaMenu(screenWidth760) {
  let menuStateCheck = document.getElementById("myNavbar");
  if (screenWidth760.matches) {
    if (menuStateCheck.style.width == "155px") {
      closeNav();
    }
  }
}

let screenWidth760 = window.matchMedia("(max-width: 760px)");
mediaMenu(screenWidth760);
screenWidth760.addListener(mediaMenu);

const mobileIcon = document.querySelector(".mobile-icon");
const mobileNav = document.querySelector(".navbar");

mobileIcon.addEventListener("click", mobileMenu);

function mobileMenu() {
  // console.log("click");
  mobileIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");
}

// const mobileLink = document.querySelector(".navItem");

// mobileLink.forEach(n => n.addEventListener("click"))


// let mqls = [
//   window.matchMedia("(max-width: 860px)"),
//   window.matchMedia("(max-width: 600px)")
// ]

// function mediaQueryResponse(mql) {
//   if (mqls[0].matches) {
//     console.log("860");
//     let menuStateCheck = document.getElementById("myNavbar");
//     menuMargin = "105px";
//     if (menuStateCheck.style.width == "155px") {
//       document.getElementById("myNavbar").style.width = menuMargin;
//     } else {
//       menuMargin = "105px";

//     }
//     if (mqls[1].matches) {
//       console.log("600");
//       if (menuStateCheck.style.width == "155px") {
//         closeNav();
//       }
//     }  
//   }
// }

// for (var i = 0; i < mqls.length; i++) {
//   mediaQueryResponse(mqls[i]);
//   mqls[i].addListener(mediaQueryResponse)
// }
