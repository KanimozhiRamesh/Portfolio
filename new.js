const texts = ["Full Stack Developer", "Java Developer", "Spring Boot Enthusiast"];
let count = 0, i = 0, currentText = '', letter = '';
(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++i);
  document.getElementById('typing').textContent = letter;
  if (letter.length === currentText.length) {
    count++; i = 0; setTimeout(type, 1500);
  } else {
    setTimeout(type, 120);
  }
})();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
  });
});

function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  const url = `https://wa.me/916383740822?text=${text}`;
  window.open(url, '_blank');
}


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
document.querySelectorAll("section").forEach(section => observer.observe(section));
