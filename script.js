window.onscroll = function() { makeNavbarSticky(); };

function makeNavbarSticky() {
  const navbar = document.getElementById("navbar");
  const navbar_sm = document.getElementById("navbar_small");
  const menu = document.getElementById("menu");
  const stickyPoint = 100; // Change this value to set the distance
  // xl:mx-12
  if (window.scrollY >= stickyPoint) {
    navbar.classList.add("sticky");
    navbar.classList.remove("xl:mx-12")
    // Small
    navbar_sm.classList.add("sticky");
    navbar_sm.classList.remove("xl:mx-12")
    // Menu
    menu.classList.add("sticky");
    menu.classList.remove("xl:mx-12")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("xl:mx-12")
    // Small
    navbar_sm.classList.remove("sticky");
    navbar_sm.classList.add("xl:mx-12")
    // Menu
    menu.classList.remove("sticky");
    menu.classList.add("xl:mx-12")
  }
}

function toggleSkills() {
  const divs = document.getElementsByName("skill-hidden");
  const moreorless = document.getElementById("moreorless")

  if (moreorless.innerText == "More") {
    moreorless.innerText = "Less"
  } else {
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

// EmailJS
(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "DYqO2n1G5ezSiJ3d0",
  });
})();

window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var submitBtn = document.getElementById('get_in_touch')
    submitBtn.innerText = "Sending..."
    // emailjs.sendForm('service_g50refa', 'contact_form', this)
    emailjs.sendForm('service_g50refa', 'template_5a1rjvi', this)

      .then(() => {
        submitBtn.innerText = "Get in Touch"
        document.getElementById('contact-form').reset();
        // console.log('SUCCESS!');
      }, (error) => {
        console.log('FAILED...', error);
      });

  });
}

// Toggle Menu
function toggleMenu(){
  const menu = document.getElementById("menu")
  menu.classList.toggle("hidden")
}
