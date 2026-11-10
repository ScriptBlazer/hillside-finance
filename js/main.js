document.documentElement.classList.add("js");

// Keep the copyright year current
document.querySelector("[data-year]").textContent = new Date().getFullYear();

// Quick links open the mortgage option they point to
function openLinkedOption() {
  const target = location.hash && document.querySelector(location.hash);
  if (target && target.tagName === "DETAILS") target.open = true;
}

window.addEventListener("hashchange", openLinkedOption);
openLinkedOption();

// Fade sections in as they reach the viewport
const revealItems = document.querySelectorAll("[data-reveal]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.1 }
);

revealItems.forEach((item) => observer.observe(item));
