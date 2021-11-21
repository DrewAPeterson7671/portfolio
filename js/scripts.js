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
home.addEventListener("click", () => { 
  toggleView("myHome");
  closeMobile();
}, false);

const experience = document.getElementById("experience");
experience.addEventListener("click", () => { 
  toggleView("myExperience");
  closeMobile();
 }, false);

const myProjects = document.getElementById("projects");
myProjects.addEventListener("click", () => { 
  toggleView("myProjects");
  closeMobile();
}, false);

const references = document.getElementById("references");
references.addEventListener("click", () => { 
  toggleView("myReferences");
  closeMobile();
}, false);

const about = document.getElementById("about");
about.addEventListener("click", () => { 
  toggleView("myAbout");
  closeMobile();
}, false)

const contact = document.getElementById("contact");
contact.addEventListener("click", () => { 
  toggleView("myContact");
  closeMobile();
}, false);


// Regular Navbar Hide and Show

const mainNav = document.querySelector(".navbar");
const closeBtn = document.querySelector(".closebtn");
const openBtn = document.querySelector(".openbtn");

function openNav() {
  if (!mainNav.classList.contains("active")) {
    mainNav.classList.add("active");
  }
  if (openBtn.classList.contains("activeopen")) {
    openBtn.classList.remove("activeopen");
  }
  if (!closeBtn.classList.contains("activeclose")) {
    closeBtn.classList.add("activeclose");
  }
}

function closeNav() {
  if (mainNav.classList.contains("active")) {
    mainNav.classList.remove("active");
  }
  if (openBtn.classList.contains("activeopen")) {
    openBtn.classList.remove("activeopen");
  }
  if (closeBtn.classList.contains("activeclose")) {
    closeBtn.classList.remove("activeclose");
  }
}

// Responsive Changes

const mobileNav = document.querySelector("#myNavbar");
  
function mobileMenu() {
  mobileNav.classList.toggle("active-mobile");
}

function closeMobile() {
  if (mobileNav.classList.contains("active-mobile")) {
    mobileNav.classList.remove("active-mobile");
  }
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
    if (!openBtn.classList.contains("mobile-navbar")) { 
      mobileNav.classList.add("mobile-navbar");
    }
  // }
  } else {
    if (mobileNav.classList.contains("mobile-navbar")) { 
      mobileNav.classList.remove("mobile-navbar");
    }
    closeMobile()
  }
}

const mediaQuery = window.matchMedia("(max-width: 812px)");
handleMediaChange(mediaQuery);
mediaQuery.addListener(handleMediaChange);


