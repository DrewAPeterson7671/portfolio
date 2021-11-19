const hidden = ["myHome", "myExperience", "myProjects", "myReferences", "myAbout", "myContact"];

// Menu Link Handling

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
  
  function mobileMenu() {
    mobileNav.classList.toggle("active-mobile");
  }

// Media Query Section

function handleMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    if (mainNav.classList.contains("active")) {
      mainNav.classList.remove("active"); 
    }
    if (openBtn.classList.contains("activeopen")) {
      openBtn.classList.remove("activeopen");
    }
    if (openBtn.classList.contains("activeclose")) { 
      closeBtn.classList.remove("activeclose")
    }
    if (openBtn.className !== "mobile-navbar") { 
      mobileNav.classList.add("mobile-navbar");
    }
  } else {
    // openBtn.classList.add("activeopen");
    // closeBtn.classList.remove("activeclose")
    if (openBtn.classList.contains("activeclose")) { 
      mobileNav.classList.remove("activeclose");
    }
  }

  // THESE are for reversing when back to big screen
    // mainNav.classList.toggle("mobileNavbar")
    // mobileNav.classList.remove("activeMobile");
}

const mediaQuery = window.matchMedia("(max-width: 768px)");
handleMediaChange(mediaQuery);
mediaQuery.addListener(handleMediaChange);


