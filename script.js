// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Section Reveal Animation
const sections = document.querySelectorAll(".section, .hero");

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "0.8s ease-in-out";
});

const revealSections = () => {
  const triggerPoint = window.innerHeight / 6 * 4;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < triggerPoint){
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

