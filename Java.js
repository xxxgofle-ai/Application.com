// Smooth Scroll & Animation on Scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  // Show section when scrolled into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Nav link smooth scroll
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: "smooth"
      });
    });
  });

  // Show system status on click
  const revealBtn = document.getElementById("revealInfo");
  const statusBox = document.getElementById("systemStatus");

  revealBtn.addEventListener("click", () => {
    if (statusBox.style.display === "block") {
      statusBox.style.display = "none";
      revealBtn.textContent = "SHOW SYSTEM STATUS";
    } else {
      statusBox.style.display = "block";
      revealBtn.textContent = "HIDE SYSTEM STATUS";
    }
  });

  // Project Detail Popup
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => {
    card.addEventListener("click", function () {
      const info = this.getAttribute("data-info");
      alert(`🔍 PROJECT INFO:\n${info}`);
    });
  });

  // Add glitch effect on hover (optional enhancement)
  const glitchElements = document.querySelectorAll(".glow-text, .nav-link, .cta-btn");
  glitchElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      el.style.textShadow = "0 0 5px #f00, 2px 2px 10px #0f0";
      setTimeout(() => {
        el.style.textShadow = "0 0 10px #f00, 0 0 20px #f00";
      }, 100);
    });
    el.addEventListener("mouseleave", () => {
      el.style.textShadow = "";
    });
  });
});
    
