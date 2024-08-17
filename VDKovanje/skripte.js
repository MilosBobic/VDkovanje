let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function trenutniSlajd(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slajdovi");
  let dots = document.getElementsByClassName("crticaIndeks");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" trenutni", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " trenutni";
}

function otvoriHamburger() {
  document.getElementById("otvorenHamburger").style.width = "100%";
  document
    .querySelectorAll(".navigacioniTekst, .navigacioniLink, .ugasi")
    .forEach((el) => (el.style.display = "block"));
  document.getElementById("hamburger").style.display = "none";
}

function zatvoriHamburger() {
  document.getElementById("otvorenHamburger").style.width = "0%";
  document
    .querySelectorAll(".navigacioniTekst, .navigacioniLink, .ugasi")
    .forEach((el) => (el.style.display = "none"));
  document.getElementById("hamburger").style.display = "block";
}
