const btn = document.querySelector("header #checkbtn");
const menuList = document.querySelector("nav #menuList");
const list = document.querySelectorAll("nav li");
const cartNum = document.querySelector(".cartnum");
const addtocart = document.querySelectorAll("#addcart");
const cart = document.querySelector(".cart");
const sidebar = document.getElementById("sidebar");
const closesidebar = document.querySelector(".sidebar-close");

menuList.style.maxHeight = "0px";

btn.addEventListener("click", () => {
  menuList.style.maxHeight = menuList.style.maxHeight === "0px" ? "270px" : "0px";
});

list.forEach(item => {
  item.addEventListener("click", () => {
    menuList.style.maxHeight = "0px";
  });
});

let counter = 0;

addtocart.forEach(item => {
  item.addEventListener("click", event => {
    event.preventDefault();
    counter += 1;
    cartNum.innerText = counter;
    addtocartclicked(event);
  });
});

function addtocartclicked(event) {
  const button = event.target;
  const shopitem = button.parentElement;
  const title = shopitem.querySelector(".title").innerText;
  const price = shopitem.querySelector(".price").innerText;
  const imagesrc = shopitem.querySelector(".productimg").src;
  console.log(title, price, imagesrc);
  additemtocart(title, price, imagesrc);
}

function additemtocart(title, price, imagesrc) {
  const cartRow = document.createElement("div");
  cartRow.classList.add("cart-items");
  cartRow.innerHTML = `
    <div>
      <img src="${imagesrc}" alt="">
      <div>
        <p>${title}</p>
      </div>
    </div>
    <p>${price}</p>
    <input type="number" value="1" class="quantity" size="7" maxlength="7">
    <svg class="deletebtn" height="25px" width="25px">
      <use href="#delete" />
    </svg>
  `;
  document.querySelector(".cart-list").append(cartRow);
}

sidebar.style.right = "-400px";

cart.addEventListener("click", () => {
  sidebar.style.right = sidebar.style.right === "-400px" ? "0px" : "-400px";
});

closesidebar.addEventListener("click", () => {
  sidebar.style.right = "-400px";
});

document.querySelector('.cart-list').addEventListener('click', e => {
  if (e.target.classList.contains('deletebtn')) {
    const parentEle = e.target.closest('.cart-items');
    parentEle.remove();
    counter -= 1;
    cartNum.innerText = counter;
  }
});




function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,es,zh-CN,hi,ar,fr,de,ru,pt,ja,ko,it,tr,bn,ur,th,vi,sw,ms,fa',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}


