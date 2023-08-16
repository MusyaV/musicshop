// menu languades
function menuLang() {
  document.querySelector(".planet").addEventListener("mouseover", () => {
    document
      .querySelectorAll("header>section#logo>nav.lang>a.interLang")
      .forEach((element) => {
        element.style.display = "block";
        window.addEventListener("mouseover", (evnt) => {
          if (
            evnt.target.className == "interLang" ||
            evnt.target.className == "interLang active" ||
            evnt.target.className == "planet" ||
            evnt.target.className == "lang"
          ) {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }
        });
      });
  });
}
// menu burger
function menuBurger() {
  document.querySelector(".burger").addEventListener("mouseover", () => {
    document
      .querySelectorAll("header>nav.navbar>a.interNavbar")
      .forEach((element) => {
        element.style.display = "block";
        window.addEventListener("mouseover", (evnt) => {
          if (
            evnt.target.className == "interNavbar" ||
            evnt.target.className == "interNavbar active" ||
            evnt.target.className == "burger" ||
            evnt.target.className == "navbar"
          ) {
            element.style.display = "block";
          } else {
            element.style.display = "";
          }
        });
      });
  });
}
