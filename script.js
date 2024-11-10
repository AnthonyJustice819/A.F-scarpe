const btn = document.querySelector('header #checkbtn');
const menuList = document.querySelector('nav #menuList');
const list = document.querySelectorAll('nav li');
const cartNum = document.querySelector('.cartnum');
const addtocart = document.querySelectorAll('.addcart');
const carticn = document.querySelector('.carticon');
const cartsection = document.querySelector('.cartTab');
const closecart = document.querySelector('.close');
console.log(cartsection);

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

addtocart.forEach(function(item) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        counter += 1;
        cartNum.innerText = counter;
    });
});


cartsection.style.width = "0px";

carticn.addEventListener('click', function(e){
    if (cartsection.style.width == "0px") {
        cartsection.style.width = "270px"
    } else {
       cartsection.style.width = "0px"
    }
})
closecart.addEventListener('click', ()=> {
       cartsection.style.width = "0px"
})