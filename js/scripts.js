let hidden = ['myHome', 'myExperience', 'myFeatured-Projects', 'myReferences', 'myAbout', 'myContact'];

function toggleHome() {
  document.getElementById("myHome").style.display = 'block';
  for (let i=1; i < (hidden.length -1); i++) {
    document.getElementById(hidden[i]).style.display = 'none';
  }
}

function toggleExperience() {
  document.getElementById("myExperience").style.display = 'block';
  for (let i=0; i < hidden.length; i++) {
    if (i == 1) {
      continue;
    }
    document.getElementById(hidden[i]).style.display = 'none';
  }
}

function openNav() {
  document.getElementById("myNavbar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("myNavbar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}