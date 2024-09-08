let brojSlajda = 1;
prikaziSlajdove(brojSlajda);

function trenutniSlajd(n) {
  prikaziSlajdove((brojSlajda = n));
}
function prikaziSlajdove(n) {
  let i;
  let slajdovi = document.getElementsByClassName("slajdovi");
  let crtice = document.getElementsByClassName("crticaIndeks");
  if (brojSlajda > slajdovi.length) {
    brojSlajda = 1;
  }
  for (i = 0; i < slajdovi.length; i++) {
    slajdovi[i].style.display = "none";
    crtice[i].className = crtice[i].className.replace(" trenutni", "");
  }
  slajdovi[brojSlajda - 1].style.opacity = 0;
  slajdovi[brojSlajda - 1].style.display = "block";
  (function fejd() {
    let prozirnost = parseFloat(slajdovi[brojSlajda - 1].style.opacity);
    slajdovi[brojSlajda - 1].style.opacity = prozirnost + 0.02;
    if (prozirnost < 1) {
      setTimeout(fejd, 30);
    }
  })();
  crtice[brojSlajda - 1].className += " trenutni";
  setTimeout(function () {
    prikaziSlajdove(brojSlajda++);
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

document.getElementById("kontaktForma").addEventListener("submit", (izraz) => {
  izraz.preventDefault();
  let redovanIzraz = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!redovanIzraz.test(String(document.getElementById("email").value).toLowerCase())) {
    alert("Email adresa nije ispravno napisana!");
    document.getElementById("kontaktForma").reset();
  } else {
    alert("Hvala na slanju poruke!");
    document.getElementById("kontaktForma").reset();
  }
});
