const nav = document.getElementById("nav-content");
const toggle = document.getElementById("nav-toggle");

function closeMenu(event) {
  if (!nav || !toggle) {
    return;
  }

  const onToggle = toggle.contains(event.target);
  const inMenu = nav.contains(event.target);

  if (onToggle) {
    nav.classList.toggle("hidden");
    toggle.setAttribute("aria-expanded", String(!nav.classList.contains("hidden")));
    return;
  }

  if (!inMenu) {
    nav.classList.add("hidden");
    toggle.setAttribute("aria-expanded", "false");
  }
}

document.addEventListener("click", closeMenu);

const heroSlides = document.querySelectorAll(".cover-slide");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (heroSlides.length > 1 && !prefersReducedMotion) {
  let activeSlideIndex = 0;

  function getRandomSlideIndex() {
    let nextSlideIndex = activeSlideIndex;

    while (nextSlideIndex === activeSlideIndex) {
      nextSlideIndex = Math.floor(Math.random() * heroSlides.length);
    }

    return nextSlideIndex;
  }

  window.setInterval(() => {
    heroSlides[activeSlideIndex].classList.remove("is-active");
    activeSlideIndex = getRandomSlideIndex();
    heroSlides[activeSlideIndex].classList.add("is-active");
  }, 3500);
}
