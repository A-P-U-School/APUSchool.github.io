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
