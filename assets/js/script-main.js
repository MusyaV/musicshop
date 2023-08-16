let imageGuitar;
let textNameGuitar;
let costGuitar;
let idGuitar;
let itemAddToCart = document.querySelector("#itemAddToCart");
let logoCartImg = document.querySelector("#logoCartImg");
let asideMyBasket = document.querySelector("#asideMyBasket");
let newDivToBasket = "";
let butHandImg = document.querySelector("section.goHome>div>img.butHand");
let a = 1;
const cartWrapper = document.querySelector("#asideMyBasket");
// URL
let newsURL = "main-news.html";
let catalogURL = "main-catalog.html";
let acousticGuitarURL = "main-guitar.html";
let mainGuitarURL = "main-guitar-1.html";
let orderingMainURL = "main-ordering.html";
let shopMainURL = "main-shop.html";
// slide
function mainSchool() {
  document.querySelectorAll(".w3-display-left").forEach((element) => {
    element.addEventListener("click", () => {
      showDivs((slideIndex += 1));
    });
  });
  document.querySelectorAll(".w3-display-right").forEach((element) => {
    element.addEventListener("click", () => {
      showDivs((slideIndex -= 1));
    });
  });
  var slideIndex = 1;
  showDivs(slideIndex);
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  }
  regForLes();
}
// cross in asideRegForLes
function crossAsReg() {
  document.querySelector(".crossAsReg").addEventListener("click", () => {
    asideRegForLes.style.display = "none";
    asideBackground.style.display = "none";
  });
}
// write comment
function writeComment() {
  document.querySelector("#writeComment").addEventListener("click", () => {
    asideProductReview.style.display = "block";
    asideBackground.style.display = "block";
    document.querySelector("#crossReview").addEventListener("click", () => {
      asideProductReview.style.display = "none";
      asideBackground.style.display = "none";
    });

    document.querySelector("#commentToThank").addEventListener("click", () => {
      asideProductReview.style.display = "none";
      asideThankYou1.style.display = "block";
      document.querySelector("#crossThank").addEventListener("click", () => {
        asideThankYou1.style.display = "none";
        asideBackground.style.display = "none";
      });

      document.querySelector("#goToHomeThank").addEventListener("click", () => {
        asideThankYou1.style.display = "none";
        asideBackground.style.display = "none";
        clickFirstItem();
      });
    });
  });
}
// main news
function mainNews() {
  document.querySelectorAll(".signNews").forEach((element) => {
    element.addEventListener("click", () => {
      fetch(newsURL)
        .then((rs) => rs.text())
        .then((content) => {
          // Load page into main
          document
            .querySelector("body>main")
            .setAttribute("id", newsURL.split(".")[0]);
          document.querySelector("body>main").innerHTML = content;
          // go home main
          document.querySelector(".butHand").addEventListener("click", () => {
            clickFirstItem();
          });
        })
        .catch()
        .finally();
    });
  });
}
// open Basket
function openBasket() {
  logoCartImg.addEventListener("click", () => {
    asideMyBasket.style.display = "block";
    asideBackground.style.display = "block";
    asideBackground.style.background = " rgba(33, 33, 33, 0.889)";
    document.querySelector("#close").addEventListener("click", () => {
      asideMyBasket.style.display = "none";
      asideBackground.style.display = "none";
    });
    // remove item in basket
    document.querySelectorAll(".crossLogin").forEach((element) => {
      element.addEventListener("click", (e) => {
        e.target.parentElement.remove();
        calcCartPrice();
      });
    });
    // creat div
    calcCartPrice();
    document
      .querySelectorAll(
        "aside#asideMyBasket>section.myBasket>div.orderItem>div.shopCart>h5.plus"
      )
      .forEach((element) => {
        element.addEventListener("click", (e) => {
          let b = e.target.previousElementSibling.innerHTML;
          if (b >= 1) {
            b++;
            e.target.previousElementSibling.innerHTML = b;
            calcCartPrice();
          }
        });
      });
    document
      .querySelectorAll(
        "aside#asideMyBasket>section.myBasket>div.orderItem>div.shopCart>h5.minus"
      )
      .forEach((element) => {
        element.addEventListener("click", (e) => {
          let b = e.target.nextElementSibling.innerHTML;
          if (b > 1) {
            b--;
            e.target.nextElementSibling.innerHTML = b;
            calcCartPrice();
          }
        });
      });
    // checkout(open main-ordering)
    document
      .querySelector("div#divAddDut>button#butAdd1")
      .addEventListener("click", () => {
        asideMyBasket.style.display = "none";
        asideBackground.style.display = "none";
        orderingMain();
      });
    // continue shopping
    document
      .querySelector("div#divAddDut>button#butAdd2")
      .addEventListener("click", () => {
        asideMyBasket.style.display = "none";
        asideBackground.style.display = "none";
        fetch(catalogURL)
          .then((rs) => rs.text())
          .then((con) => {
            document
              .querySelector("body>main")
              .setAttribute("id", catalogURL.split(".")[0]);
            document.querySelector("body>main").innerHTML = con;
            acousticGuitar();
            goToGuitar();
          });
      });
    // go home main
    document
      .querySelector("section.goHome>div>img.butHand")
      .addEventListener("click", () => {
        asideMyBasket.style.display = "none";
        asideBackground.style.display = "none";
        clickFirstItem();
      });
  });
}
// open orderingMain()
function orderingMain() {
  fetch(orderingMainURL)
    .then((rs) => rs.text())
    .then((con) => {
      document
        .querySelector("body>main")
        .setAttribute("id", orderingMainURL.split(".")[0]);
      document.querySelector("body>main").innerHTML = con;
      document.querySelector(".butHand").addEventListener("click", () => {
        clickFirstItem();
      });
      document.querySelector("#contShop").addEventListener("click", () => {
        openCatalog();
      });
    });
}
// open main-shop
function openCatalog() {
  fetch(shopMainURL)
    .then((rs) => rs.text())
    .then((con) => {
      document
        .querySelector("body>main")
        .setAttribute("id", shopMainURL.split(".")[0]);
      document.querySelector("body>main").innerHTML = con;
      document.querySelector("#id12").innerHTML = mainHome12HTML;
      mainShop();
    });
}
// recalculate items in basket
function calcCartPrice() {
  let priceTotal = 0;
  // находим количество товаров
  document
    .querySelectorAll("aside#asideMyBasket>section.myBasket>div.orderItem")
    .forEach((element) => {
      let totalCost =
        element.children[2].children[1].innerHTML *
        parseInt(element.children[3].innerHTML);
      priceTotal += totalCost;
    });
  document.querySelector(
    "aside#asideMyBasket>section.myBasket>div.total>h1#totalMyBasket"
  ).innerHTML = priceTotal + "₪";
}
// put item to basket
function butPutToCart() {
  document.querySelectorAll(".butPutToCartGuit").forEach((element) => {
    element.addEventListener("click", (e) => {
      // collect information from guitar
      // imageGuitar
      imageGuitar = e.target.parentElement.firstElementChild.firstChild.src;
      // name
      textNameGuitar = e.target.nextSibling.parentElement.children[1].innerHTML;
      // cost
      costGuitar = e.target.nextSibling.nextSibling.children[0].innerHTML;
      // aside itemAddToCart
      itemAddToCart.style.display = "block";
      asideBackground.style.display = "block";
      document.querySelector(
        "aside#itemAddToCart>div>div>div.foto-big"
      ).style.backgroundImage = `url(${imageGuitar})`;
      document.querySelector(".fender").innerHTML = textNameGuitar;
      document.querySelector(".costGuit1").innerHTML = costGuitar + "₪";
      newItem();
    });
  });
}
// new DIV to basket
function newItem() {
  // проверяем на наличие товара
  const itemInCart = cartWrapper.querySelector(`[src="${imageGuitar}"]`);
  if (itemInCart) {
    let a =
      itemInCart.parentElement.parentElement.children[2].children[1].innerHTML;

    a++;
    itemInCart.parentElement.parentElement.children[2].children[1].innerHTML =
      a;
  } else {
    //  new div to basket
    let newDivToBasket = `
      <div class="orderItem">
      <div class="div1Add"><img src="${imageGuitar}"></div>
      <h2 class="inter orderH2">${textNameGuitar}</h2>
      <div class="shopCart">
        <h5 class="minus">-</h5>
        <h5 class="number">1</h5>
        <h5 class="plus">+</h5>
      </div>
      <h2 id="currentCost" class="mont-alt">${costGuitar} ₪</h2>
      <span class="crossLogin">&times;</span>
      </div>
      `;
    // new item to basket
    document
      .querySelector("aside#asideMyBasket>section.myBasket>div.total")
      .insertAdjacentHTML("beforebegin", newDivToBasket);
  }
  // cross
  document.querySelector("#crossConPut").addEventListener("click", () => {
    itemAddToCart.style.display = "none";
    asideBackground.style.display = "none";
  });
}
// remove item in basket
function removeItem() {
  document.querySelectorAll(".crossLogin").forEach((element) => {
    element.addEventListener("click", (e) => {
      let parentItem = e.target.parentElement;
      parentItem.remove();
      calcCartPrice();
    });
  });
}
// open main-shop from crumbs
function goToCatalog() {
  document.querySelector("#goToCatalog").addEventListener("click", () => {
    openCatalog();
  });
}
// open main-guitar from crumbs
function goToGuitarAc() {
  document.querySelector("#goToGuitarAc").addEventListener("click", () => {
    fetch(acousticGuitarURL)
      .then((rs) => rs.text())
      .then((con) => {
        document
          .querySelector("body>main")
          .setAttribute("id", acousticGuitarURL.split(".")[0]);
        document.querySelector("body>main").innerHTML = con;
        openGuitar1();
        butPutToCart();
        goToGuitar();
        // goToCatalog();
      });
  });
}
// open main-catalog from crumbs
function goToGuitar() {
  document.querySelector("#goToGuitar").addEventListener("click", () => {
    fetch(catalogURL)
      .then((rs) => rs.text())
      .then((con) => {
        document
          .querySelector("body>main")
          .setAttribute("id", catalogURL.split(".")[0]);
        document.querySelector("body>main").innerHTML = con;
        acousticGuitar();
        // goToGuitar();
        openCatalog();
      });
  });
}
// open main-catalog from shop(.shop)
function mainShop() {
  document.querySelectorAll(".shop").forEach((element) => {
    element.addEventListener("click", () => {
      fetch(catalogURL)
        .then((rs) => rs.text())
        .then((content) => {
          document
            .querySelector("body>main")
            .setAttribute("id", catalogURL.split(".")[0]);
          document.querySelector("body>main").innerHTML = content;
          acousticGuitar();
          goToCatalog();
        });
    });
  });
}
// open main-guitar
function acousticGuitar() {
  document.querySelector("#acousticGuitar").addEventListener("click", () => {
    fetch(acousticGuitarURL)
      .then((rs) => rs.text())
      .then((con) => {
        document
          .querySelector("body>main")
          .setAttribute("id", acousticGuitarURL.split(".")[0]);
        document.querySelector("body>main").innerHTML = con;
        openGuitar1();
        butPutToCart();
        // go to main catalog
        document.querySelector("#goToGuitar").addEventListener("click", () => {
          fetch(catalogURL)
            .then((rs) => rs.text())
            .then((con) => {
              document
                .querySelector("body>main")
                .setAttribute("id", catalogURL.split(".")[0]);
              document.querySelector("body>main").innerHTML = con;
              acousticGuitar();
              document.querySelector("#goToCatalog").addEventListener("click", () => {
                openCatalog();
              });
            });
          console.log("openopen");
        });
        // go to main shop
        document.querySelector("#goToCatalog").addEventListener("click", () => {
          openCatalog();
        });
      });
  });
}
// open main-guitar-1
function openGuitar1() {
  document.querySelectorAll(".one").forEach((element) => {
    element.addEventListener("click", (e) => {
      // collect information from guitar
      // imageGuitar
      imageGuitar = e.target.src;
      // name
      textNameGuitar =
        e.target.parentElement.parentElement.children[1].innerHTML;
      // cost
      costGuitar =
        e.target.parentElement.parentElement.children[3].children[0].innerHTML;
        // go to main guitar
        goToMainGuitar();
        // go to main shop
        document.querySelector("#goToCatalog").addEventListener("click", () => {
          openCatalog();
        });
    });
  });
}
// go to mainGuitar
function goToMainGuitar() {
  fetch(mainGuitarURL)
    .then((rs) => rs.text())
    .then((content) => {
      document
        .querySelector("body>main")
        .setAttribute("id", mainGuitarURL.split(".")[0]);
      document.querySelector("body>main").innerHTML = content;
      
      document.querySelector("#goToGuitar").addEventListener("click", () => {
        fetch(catalogURL)
          .then((rs) => rs.text())
          .then((con) => {
            document
              .querySelector("body>main")
              .setAttribute("id", catalogURL.split(".")[0]);
            document.querySelector("body>main").innerHTML = con;
            acousticGuitar();
            document.querySelector("#goToCatalog").addEventListener("click", () => {
              openCatalog();
            });
          });
      });
       goToGuitarAc();
       goToCatalog();
      document.querySelector("#guitarOne").innerHTML = textNameGuitar;
      // new div dist
      let newDivDist = `
    <div id="foto-item">
    <div class="foto-big fotoIn"><img src="${imageGuitar}"></div>
    <div id="foto-3items">
      <div><img class="fotoIn" src="assets/images/fender1.jpg" alt="" srcset=""></div>
      <div><img class="fotoIn" src="assets/images/fender2.jpg" alt="" srcset=""></div>
      <div><img class="fotoIn" src="assets/images/fender3.jpg" alt="" srcset=""></div>
    </div>
  </div>
                            <div id="dist">
                            <h4 class="inter bold">${textNameGuitar}</h4>
                            <h4 id="h4-small" class="inter">
                              Акустическая гитара, форма корпуса - дредноут, цвет черный, верхняя дека -
                              ель, нижняя дека и обечайка - махагони, гриф - махагони, накладка грифа -
                              орех, бридж - орех, 20 ладов, профиль грифа - C, радиус накладки - 12',
                              порожек - Graph Tech NuBone, колки - литые, фурнитура - хром
                            </h4>
                            <div id="order-all">
                              <div id="order">
                                <h4 id="cost" class="inter">${costGuitar}</h4>
                                <h4 id="shekel" class="inter">₪</h4>
                              </div>
                              <button class="butPutToCart button" >Положить в корзину</button>
                            </div>
                          </div>

                            `;
      document.querySelector(".guitar-1-card").innerHTML = newDivDist;
      document.querySelector(".butHand").addEventListener("click", () => {
        clickFirstItem();
      });
      //  butPutToCart
      document.querySelector(".butPutToCart").addEventListener("click", (e) => {
        // collect information from guitar
        // imageGuitar
        imageGuitar =
          e.target.parentElement.parentElement.parentElement.children[0]
            .children[0].children[0].src;
        // name
        textNameGuitar =
          e.target.parentElement.parentElement.children[0].innerHTML;
        // cost
        costGuitar = e.target.previousElementSibling.children[0].innerHTML;
        // aside itemAddToCart
        itemAddToCart.style.display = "block";
        asideBackground.style.display = "block";
        document.querySelector(
          "aside#itemAddToCart>div>div>div.foto-big"
        ).style.backgroundImage = `url(${imageGuitar})`;
        document.querySelector(".fender").innerHTML = textNameGuitar;
        document.querySelector(".costGuit1").innerHTML = costGuitar + "₪";
        newItem();
      });
    });
}
