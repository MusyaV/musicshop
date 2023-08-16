// main button registration from header
function logoReg() {
  document.querySelector("#logoRegImg").addEventListener("click", () => {
    asideLogin.style.display = "block";
    asideBackground.style.display = "block";
    cross();
    registration();
    registerBtn();
  });
}
// open asideRegForLes
function regForLes() {
  document.querySelectorAll(".regForLes").forEach((element) => {
    element.addEventListener("click", () => {
      asideRegForLes.style.display = "block";
      asideBackground.style.display = "block";
      document.querySelector(".butHand").addEventListener("click", () => {
        asideRegForLes.style.display = "none";
        asideBackground.style.display = "none";
      });
      crossAsReg();
    });
  });
}
// cross in registration forms 
function cross() {
  document.querySelector("#crossLogin").addEventListener("click", function () {
    asideLogin.style.display = "none";
    asideBackground.style.display = "none";
  });
  document.querySelector("#crossReg2").addEventListener("click", function () {
    asideRegistration.style.display = "none";
    asideBackground.style.display = "none";
  });
}
// open asideLogin
function registerBtn() {
  document.querySelector("#submitRegBut").addEventListener("click", () => {
    asideRegistration.style.display = "none";
    asideLogin.style.display = "block";
    cross();
  });
}
// open asideRegistration
function registration() {
  document.querySelector("#butLoginReg").addEventListener("click", function () {
    asideLogin.style.display = "none";
    asideRegistration.style.display = "block";
  });
}
