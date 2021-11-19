const hidden = ["myHome", "myExperience", "myProjects", "myReferences", "myAbout", "myContact"];

// Menu Link Handling

function toggleView(section) {
  console.log("toggleView ran")
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


// Regular Navbar Hide and Show

const mainNav = document.querySelector(".navbar");
const closeBtn = document.querySelector(".closebtn");
const openBtn = document.querySelector(".openbtn");

function openNav() {
  mainNav.classList.toggle("active")
  closeBtn.classList.toggle("activeclose")
  openBtn.classList.toggle("activeopen")
}

function closeNav() {
  mainNav.classList.toggle("active")
  closeBtn.classList.toggle("activeclose")
  openBtn.classList.toggle("activeopen")
}

// Responsive Changes

const mobileNav = document.querySelector("#myNavbar");

// function responsiveNav() {
  //   console.log("responsiveNav ran")
  //   mainNav.classList.toggle("activeMobile")
  // }
  
  function mobileMenu() {
    console.log("Click Mobile Open");
    // mobileIcon.classList.toggle("activeMobile");
    mobileNav.classList.toggle("active-mobile");
    console.log(mobileNav.classList)
  }
  
// const mobileIcon = document.querySelector(".mobile-icon");
// mobileIcon.addEventListener("click", () => mobileMenu(), false);

// Media Query Section

function handleMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    mainNav.classList.remove("active");
    openBtn.classList.remove("activeopen");
    closeBtn.classList.remove("activeclose")
    mobileNav.classList.add("mobile-navbar");
  } else {
    // openBtn.classList.add("activeopen");
    // closeBtn.classList.remove("activeclose")
    mobileNav.classList.remove("mobile-navbar");
  }

  // THESE are for reversing when back to big screen
  // mobileIcon may not be needed
    // mainNav.classList.toggle("mobileNavbar")
    // mobileIcon.classList.remove("activeMobile");
    // mobileNav.classList.remove("activeMobile");
}

const mediaQuery = window.matchMedia("(max-width: 768px)");
handleMediaChange(mediaQuery);
mediaQuery.addListener(handleMediaChange);


