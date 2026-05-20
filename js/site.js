const header = document.getElementById("header");
const navContent = document.getElementById("nav-content");
const navAction = document.getElementById("navAction");
const navToggle = document.getElementById("nav-toggle");
const colorTargets = document.querySelectorAll(".toggleColour");

function setHeaderScrolled(isScrolled) {
  if (!header || !navContent) {
    return;
  }

  header.classList.toggle("bg-white", isScrolled);
  header.classList.toggle("shadow", isScrolled);

  if (navAction) {
    navAction.classList.toggle("gradient", isScrolled);
    navAction.classList.toggle("text-white", isScrolled);
    navAction.classList.toggle("bg-white", !isScrolled);
    navAction.classList.toggle("text-gray-800", !isScrolled);
  }

  colorTargets.forEach((target) => {
    target.classList.toggle("text-gray-800", isScrolled);
    target.classList.toggle("text-white", !isScrolled);
  });

  navContent.classList.toggle("bg-white", isScrolled);
  navContent.classList.toggle("bg-gray-100", !isScrolled);
}

function updateHeaderOnScroll() {
  setHeaderScrolled(window.scrollY > 10);
}

function closeMobileMenuWhenOutside(event) {
  if (!navContent || !navToggle) {
    return;
  }

  const clickedToggle = navToggle.contains(event.target);
  const clickedMenu = navContent.contains(event.target);

  if (clickedToggle) {
    navContent.classList.toggle("hidden");
    return;
  }

  if (!clickedMenu) {
    navContent.classList.add("hidden");
  }
}

updateHeaderOnScroll();
document.addEventListener("scroll", updateHeaderOnScroll);
document.addEventListener("click", closeMobileMenuWhenOutside);
