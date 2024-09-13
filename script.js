window.onscroll = function() { makeNavbarSticky(); };

function makeNavbarSticky() {
  const navbar = document.getElementById("navbar");
  const stickyPoint = 100; // Change this value to set the distance
// xl:mx-12
  if (window.pageYOffset >= stickyPoint) {
    navbar.classList.add("sticky");
    navbar.classList.remove("xl:mx-12")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("xl:mx-12")
  }
}

function toggleSkills() {
  const divs = document.getElementsByName("skill-hidden");
  const moreorless = document.getElementById("moreorless")

  if(moreorless.innerText == "More"){
    moreorless.innerText = "Less"
  }else{
    moreorless.innerText = "More"
  }

  divs.forEach((div) => {
    if (div.classList.contains("skill-hidden")) {
      div.classList.remove("skill-hidden");
    } else {
      div.classList.add("skill-hidden");
    }
  });
}
