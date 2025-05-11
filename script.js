//header section
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

const typed = new Typed('#greeting', {
  strings: ["Hello!"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: false
});
const type = new Typed('#servicesList', {
  strings: ["Web Developer","Software Developer","UI/UX Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});



