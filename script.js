// Mobile Menu Toggle Function
function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  if (navMenu) {
    navMenu.classList.toggle('active');
  }
}

// Close menu when a link is clicked
document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
      navMenu.classList.remove('active');
    }
  });
});

// Close menu when window is resized to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
      navMenu.classList.remove('active');
    }
  }
});

// Original scroll effect with improved nav styling
window.addEventListener("scroll", function() {
  let nav = document.querySelector("nav");
  
  if (window.scrollY > 50) {
    nav.style.background = "rgba(0, 0, 0, 0.85)";
  } else {
    nav.style.background = "rgba(0, 0, 0, 0.6)";
  }
});

function sendMail(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  let mailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

  window.location.href = `mailto:info.aiagrirover@gmail.com?subject=${subject}&body=${mailBody}`;
}