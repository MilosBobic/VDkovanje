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
  slides[slideIndex - 1].style.opacity = 0;
  slides[slideIndex - 1].style.display = "block";
  (function fade() {
    let opacity = parseFloat(slides[slideIndex - 1].style.opacity);
    slides[slideIndex - 1].style.opacity = opacity + 0.05;
    if (opacity < 1) {
      setTimeout(fade, 30);
    }
  })();
  dots[slideIndex - 1].className += " trenutni";
  setTimeout(function () {
    showSlides(slideIndex++);
  }, 5000); // 5s
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

document.getElementById("kontaktForma").addEventListener("submit", (e) => {
  e.preventDefault();
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(document.getElementById("email").value).toLowerCase())) {
    alert("Email adresa nije ispravno napisana!");
    document.getElementById("kontaktForma").reset();
  } else {
    alert("Hvala za slanje poruke!");
    document.getElementById("kontaktForma").reset();
  }
});
