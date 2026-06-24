const header = document.getElementById("header");
const nav = document.getElementById("nav-content");
const action = document.getElementById("navAction");
const toggle = document.getElementById("nav-toggle");
const links = document.querySelectorAll(".toggleColour");
const fixedHeader = document.body.dataset.fixedHeader === "true";

function setHeader(active) {
  if (!header || !nav) {
    return;
  }

  header.classList.toggle("bg-white", active);
  header.classList.toggle("shadow", active);

  if (action) {
    action.classList.toggle("gradient", active);
    action.classList.toggle("text-white", active);
    action.classList.toggle("bg-white", !active);
    action.classList.toggle("text-gray-800", !active);
  }

  links.forEach((link) => {
    link.classList.toggle("text-gray-800", active);
    link.classList.toggle("text-white", !active);
  });

  nav.classList.toggle("bg-white", active);
  nav.classList.toggle("bg-gray-100", !active);
}

function syncHeader() {
  setHeader(fixedHeader || window.scrollY > 10);
}

function closeMenu(event) {
  if (!nav || !toggle) {
    return;
  }

  const onToggle = toggle.contains(event.target);
  const inMenu = nav.contains(event.target);

  if (onToggle) {
    nav.classList.toggle("hidden");
    return;
  }

  if (!inMenu) {
    nav.classList.add("hidden");
  }
}

// ページによっては常にスクロール後のナビ表示にする。
syncHeader();
if (!fixedHeader) {
  document.addEventListener("scroll", syncHeader);
}
document.addEventListener("click", closeMenu);
