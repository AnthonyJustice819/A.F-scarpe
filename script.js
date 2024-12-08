const btn = document.querySelector('header #checkbtn');
const menuList = document.querySelector('nav #menuList');
const list = document.querySelectorAll('nav li');
const cartNum = document.querySelector('.cartnum');
const addtocart = document.querySelectorAll('#addcart');
const cart = document.querySelector('.cart');
const sidebar = document.getElementById('sidebar');
const closesidebar = document.querySelector('.sidebar-close');
// const title = document.querySelectorAll('#title')



menuList.style.maxHeight = "0px";

btn.addEventListener('click', function(e){
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "270px"
    } else {
        menuList.style.maxHeight = "0px"
    }
})

list.forEach(function (list){
        list.addEventListener('click', function(e){
    menuList.style.maxHeight = "0px";
})
}) 





let counter = 0;

// addtocart.forEach(function(item) {

//     item.addEventListener('click', (addtocartclicked) => {
//         addtocartclicked.preventDefault();
//         counter += 1;
        
//         cartNum.innerText = counter; 

//     });
// });

addtocart.forEach(seee => {
    seee.addEventListener('click', (hello)=>{
        counter += 1;
        
        cartNum.innerText = counter;
    })
  
});

addtocart.forEach(i => {
    i.addEventListener('click', addtocartclicked)
  
});
 

function addtocartclicked(event) {
    var button = event.target;
    var shopitem = button.parentElement;
    var title = shopitem.querySelector('.title').innerText;
    var price = shopitem.querySelector('.price').innerText;
    var imagesrc = shopitem.querySelector('.productimg').src
console.log(title, price, imagesrc);
additemtocart(title, price, imagesrc);
}

function additemtocart(title, price, imagesrc) {
    const cartRow = document.createElement('div')
    cartRow.classList.add('cart-list')
    const cartItems = document.querySelector('.cart-list').append(cartRow)
    cartRowContent = `<div class="cart-items">

            <div>
              <img src="/images/nowww.png" alt="">
              <div>
                <p>AF SCARPE</p>
              </div>
            </div>


            <p>¥550</p>

            <input type="number" value="1" class="quantity" size="7" maxlength="7">

            <svg id="deletebtn" height="25px" width="25px">
              <use href="#delete" />
            </svg>
          </div>`
    cartRow.innerHTML = cartRowContent;
}




sidebar.style.right = "-400px";

cart.addEventListener('click', function(e){
    if (sidebar.style.right == "-400px") {
      sidebar.style.right = "-0px"
       
    }  else {
      sidebar.style.right = "-400px"
    }
})


closesidebar.addEventListener('click', ()=>{
  sidebar.style.right = "-400px"
})
// closesidebar.addEventListener('click', ()=>{
//   sidebar.style.right = "0px";
// })
