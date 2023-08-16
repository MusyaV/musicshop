const DATA_URL = "test.json";
let mainMenuItems;
let mainHome2HTML;
let mainHome3HTML;
let mainHome5HTML;
let mainHome7HTML;
let mainHome9HTML;
let mainHome10HTML;
let mainHome12HTML;
let mainHome15HTML;
let mainHome17HTML;

// aside asideRegForLes
let asideRegForLes = document.querySelector("#regForLesson");
// aside ProductReview
let asideProductReview = document.querySelector("#productReview");
// aside thankYou1
let asideThankYou1 = document.querySelector("#thankYou1");
// aside asideLogin
let asideLogin = document.querySelector("#login");
// aside asideRegistration
let asideRegistration = document.querySelector("#registration");
// aside background
let asideBackground = document.querySelector('#background');

function projectInit() {
  mainMenuItems = document.querySelectorAll("a.interNavbar");
  mainMenuItems.forEach((element) => {
    element.addEventListener("click", (evnt) => {
      const PAGE_TO_LOAD = `main-${evnt.currentTarget.getAttribute("id")}.html`;
      const mainID = PAGE_TO_LOAD.split(".")[0]; // convert string to Array
      fetch(PAGE_TO_LOAD)
        .then((rs) => rs.text())
        .then((data) => {
          document.querySelector("body>main").setAttribute("id", mainID);
          document.querySelector("body>main").innerHTML = data;
          // if main == 'main-home'
          if (mainID == "main-home") {
            fetch(DATA_URL)
              .then((respone) => respone.json())
              .then((result) => {
                //   main-home html section 1-2
                mainHome2HTML = ` `;
                result.section2.forEach((element) => {
                  mainHome2HTML += `<h3 class="mont-alt">${element.text}</h3>`;
                });
                document.querySelector("section#id2>div").innerHTML =
                  mainHome2HTML;
                // main-home HTML section 3
                mainHome3HTML = ` `;
                result.section3.forEach((element) => {
                  mainHome3HTML += `
              <div class="item${element.item}">
              <h1 class="mont-alt">${element.text}</h1>
              <img src="/assets/images/${element.svg}-scheme.svg" alt="" />
            </div>
              `;
                });
                document.querySelector("#fourItem").innerHTML = mainHome3HTML;
                // main-home HTML section 5
                mainHome5HTML = "";
                result.section5.forEach((element) => {
                  mainHome5HTML += `
                            <div class="teacher${element.num}">
                            <div class="teachIn1">
                              <h2 class="mont-alt">${element.header}</h2>
                              <h3 class="mont-alt">${element.desc}</h3>
                            </div>
                            <div class="teachIn2">
                              <img class="teacherImg" src="/assets/images/teacher-${element.inst}.jpg" alt="" />
                              <img class="small" src="/assets/images/${element.inst}-small.svg" alt="" />
                            </div>
                          </div>
                            `;
                });
                document.querySelector("#id5").innerHTML = mainHome5HTML;
                // main-home HTML section 7
                mainHome7HTML = "";
                result.section7.forEach((element) => {
                  mainHome7HTML += `<img class="mySlides" src="/assets/images/carousel-${element.num}.jpg" />`;
                });
                document
                  .querySelector(".w3-display-left")
                  .insertAdjacentHTML("beforebegin", mainHome7HTML);
                // main-home HTML section 9
                mainHome9HTML = "";
                result.section9.forEach((element) => {
                  mainHome9HTML += `
                             <div class="price">
                               <h4 class="mont-alt">${element.lesson}</h4>
                               <h2 class="mont-alt">${element.cost} ₪</h2>
                               <button class="button regForLes">Записаться</button>
                             </div>
                             `;
                });
                document.querySelector("#id9").innerHTML = mainHome9HTML;
                // main-home HTML section 10
                mainHome10HTML = "";
                result.section10.forEach((element) => {
                  mainHome10HTML += `
                            <div id="comItem">
                            <div><img src="/assets/images/com-${element.img}.jpg" alt="" srcset=""></div>
                            <h4 class="inter">${element.text}</h4>
                            </div>
                            `;
                });
                document.querySelector("#com2Item").innerHTML = mainHome10HTML;
                // main-home HTML section 12
                mainHome12HTML = "";
                result.section12.forEach((element) => {
                  mainHome12HTML += `
                                <div class="shop">
                                <h4>${element.header}</h4>
                                <img src="/assets/images/catalog-${element.num}.svg" alt="" />
                              </div>
                          `;
                });
                document.querySelector("#id12").innerHTML = mainHome12HTML;
                // main-home HTML section 15
                mainHome15HTML = "";
                result.section15.forEach((element) => {
                  mainHome15HTML += `
                                <div class="slide">
                                <img src="/assets/images/logo-${element.img}.svg" alt="" />
                              </div>
                        `;
                });
                document.querySelector(".slider-track").innerHTML =
                  mainHome15HTML;
                // main-home HTML section 17
                mainHome17HTML = "";
                result.section17.forEach((element) => {
                  mainHome17HTML += `
                                  <div class="signNews">
                                  <div><img src="/assets/images/master-${element.img}.jpg" alt="" srcset=""></div>
                                  <h4 class="inter">Мастер-класс ${element.img}</h4>
                                </div>
                          `;
                });
                document.querySelector(".news").innerHTML = mainHome17HTML;
                mainSchool();
                writeComment();
                regForLes();
                mainShop();
                mainNews()
              });
            //  mainNews();
            document.querySelector('.signNews').addEventListener('click', ()=>{
              console.log('sales');
            })
          }

          // if main == 'main-school'
          if (mainID == "main-school") {
            document.querySelector("#fourItem").innerHTML = mainHome3HTML;
            document.querySelector("#id5").innerHTML = mainHome5HTML;
            document
              .querySelector(".w3-display-left")
              .insertAdjacentHTML("beforebegin", mainHome7HTML);
            document.querySelector("#id9").innerHTML = mainHome9HTML;
            document.querySelector("#com2Item").innerHTML = mainHome10HTML;
            mainSchool();
            writeComment();
            regForLes();
          }
          // if main == "main-shop")
          if (mainID == "main-shop") {
            document.querySelector("#id12").innerHTML = mainHome12HTML;
            mainShop();
          }
          // go home main
          document.querySelector(".butHand").addEventListener("click", () => {
            clickFirstItem();
          });
        })
        .catch()
        .finally();
      removeAllACtive();
      evnt.currentTarget.classList.add("active");
    });
  });
}
// click first menu item
function clickFirstItem() {
  document.querySelector("header>nav.navbar>a:nth-of-type(1)").click();
}
// main Logo
document.querySelector("#logo").addEventListener("click", () => {
  clickFirstItem();
});
// remove class active
function removeAllACtive() {
  mainMenuItems.forEach((e) => {
    e.classList.remove("active");
  });
}
// onload
window.onload = function() {
  menuLang();
  menuBurger() 
  projectInit();
  clickFirstItem();
  logoReg();
  openBasket();
};
