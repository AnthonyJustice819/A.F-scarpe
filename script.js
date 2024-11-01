const btn = document.querySelector('header #checkbtn');
const menuList = document.querySelector('nav #menuList');
const list = document.querySelectorAll('nav li');

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

const cartNum = document.querySelector('.cartnum');
const addtocart = document.querySelectorAll('.addcart');
let counter = 0;

addtocart.forEach(function(item) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        counter += 1;
        cartNum.innerText = counter;
    });
});
