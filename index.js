/* ================= GALLERY ================= */

const btn = document.querySelector(".gallery-btn");
const gallery = document.querySelector(".gallery");

let open = false;

btn.addEventListener("click", () => {

  open = !open;

  if (open) {

    gallery.classList.remove("collapsed");

    btn.textContent = "Show Less";

  } else {

    gallery.classList.add("collapsed");

    btn.textContent = "View All Photos";

  }

});


/* ================= MOBILE MENU ================= */

const hamburger = document.getElementById("hamburger");

const mobileMenu = document.getElementById("mobileMenu");


hamburger.addEventListener("click", () => {

  hamburger.classList.toggle("active");

  mobileMenu.classList.toggle("active");

});


/* CLOSE MENU WHEN LINK CLICKED */

const mobileLinks = document.querySelectorAll(".mobile-menu a");


mobileLinks.forEach(link => {

  link.addEventListener("click", () => {

    hamburger.classList.remove("active");

    mobileMenu.classList.remove("active");

  });

});