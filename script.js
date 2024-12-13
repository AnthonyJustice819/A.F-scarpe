const btn = document.querySelector("header #checkbtn");
const menuList = document.querySelector("nav #menuList");
const list = document.querySelectorAll("nav li");
const cartNum = document.querySelector(".cartnum");
const addtocart = document.querySelectorAll("#addcart");
const cart = document.querySelector(".cart");
const sidebar = document.getElementById("sidebar");
const closesidebar = document.querySelector(".sidebar-close");



menuList.style.maxHeight = "0px";

btn.addEventListener("click", function (e) {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "270px";
  } else {
    menuList.style.maxHeight = "0px";
  }
});

list.forEach(function (list) {
  list.addEventListener("click", function (e) {
    menuList.style.maxHeight = "0px";
  });
});

let counter = 0;

addtocart.forEach(function (item) {
  item.addEventListener("click", (addtocartclicked) => {
    addtocartclicked.preventDefault();
    counter += 1;

    cartNum.innerText = counter;
  });
});

addtocart.forEach((i) => {
  i.addEventListener("click", addtocartclicked);
});

function addtocartclicked(event) {
  var button = event.target;
  var shopitem = button.parentElement;
  var title = shopitem.querySelector(".title").innerText;
  var price = shopitem.querySelector(".price").innerText;
  var imagesrc = shopitem.querySelector(".productimg").src;
  console.log(title, price, imagesrc);
  additemtocart(title, price, imagesrc);
}

function additemtocart(title, price, imagesrc) {
  const cartRow = document.createElement("div");
  cartRow.classList.add("cart-list");
  const cartItems = document.querySelector(".cart-list").append(cartRow);
  cartRowContent = `<div class="cart-items">
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
          </div>`;
  cartRow.innerHTML = cartRowContent;
  const deletebtns = document.querySelectorAll('.deletebtn');
  deletebtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentEle = btn.parentElement.parentElement;
      parentEle.remove(); 

    });
  });
  }

sidebar.style.right = "-400px";

cart.addEventListener("click", function (e) {
  if (sidebar.style.right == "-400px") {
    sidebar.style.right = "-0px";
  } else {
    sidebar.style.right = "-400px";
  }
});

closesidebar.addEventListener("click", () => {
  sidebar.style.right = "-400px";
});

// Event delegation: Attach event listener to the parent element
document.querySelector('.cart-list').addEventListener('click', function (e) {
  if (e.target.classList.contains('deletebtn')) {
    const parentEle = e.target.closest('.cart-items');
    parentEle.remove(); // Remove the cart item
    counter -= 1; // Decrement the counter
    cartNum.innerText = counter; // Update the cart number displayed
  }
});

