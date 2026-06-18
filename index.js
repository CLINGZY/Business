/* =========================================
   BUSINESS CONTENT LOADER
========================================= */

document.addEventListener("DOMContentLoaded",()=>{

document.title = business.name;

document.getElementById("business-name").textContent = business.name;
document.getElementById("footerName").textContent = business.name;


// HERO

document.getElementById("heroTitle").textContent = business.hero.title;
document.getElementById("heroText").textContent = business.hero.text;
document.getElementById("heroImage").src = business.hero.image;


// ABOUT

document.getElementById("aboutTitle").textContent = business.about.title;
document.getElementById("aboutText").textContent = business.about.text;


// SERVICES

const servicesContainer = document.getElementById("servicesContainer");

servicesContainer.innerHTML = "";

business.services.forEach(service=>{

servicesContainer.innerHTML += `
<div class="card">
<h3>${service.title}</h3>
<p>${service.description}</p>
</div>
`;

});


// GALLERY

const galleryContainer = document.getElementById("galleryContainer");

galleryContainer.innerHTML = "";

business.gallery.forEach(image=>{

galleryContainer.innerHTML += `
<img src="${image}" alt="${business.name}">
`;

});


// CONTACT

const whatsapp = `https://wa.me/${business.contact.whatsapp}`;
const phone = `tel:${business.contact.phone}`;

document.getElementById("whatsappBtn").href = whatsapp;
document.getElementById("heroWhatsappBtn").href = whatsapp;
document.getElementById("floatingWhatsapp").href = whatsapp;

document.getElementById("callBtn").href = phone;
document.getElementById("heroCallBtn").href = phone;


// THEME

document.documentElement.style.setProperty(
"--brand",
business.theme?.primary || "#111"
);

document.documentElement.style.setProperty(
"--brand-hover",
business.theme?.hover || "#333"
);


// GALLERY TOGGLE

const galleryBtn = document.querySelector(".gallery-btn");
const gallery = document.getElementById("galleryContainer");

let galleryOpen = false;

galleryBtn.addEventListener("click",()=>{

galleryOpen = !galleryOpen;

gallery.classList.toggle(
"collapsed",
!galleryOpen
);

galleryBtn.textContent =
galleryOpen ? "Show Less" : "View All Photos";

});


// MOBILE MENU

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click",()=>{

hamburger.classList.toggle("active");
mobileMenu.classList.toggle("active");

});


document.querySelectorAll(".mobile-menu a")
.forEach(link=>{

link.addEventListener("click",()=>{

hamburger.classList.remove("active");
mobileMenu.classList.remove("active");

});

});

});