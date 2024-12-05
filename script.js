const btn = document.querySelector('header #checkbtn');
const menuList = document.querySelector('nav #menuList');
const list = document.querySelectorAll('nav li');
const cartNum = document.querySelector('.cartnum');
const addtocart = document.querySelectorAll('.addcart');
const cart = document.querySelector('.cart');
const sidebar = document.getElementById('sidebar')
const closesidebar = document.querySelector('.sidebar-close')
console.log(closesidebar);

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


sidebar.style.right = "-300px";

cart.addEventListener('click', function(e){
    if (sidebar.style.right == "-300px") {
      sidebar.style.right = "0px"
       
    }  else {
      sidebar.style.right = "0px"
    }
})


closesidebar.addEventListener('click', ()=>{
  sidebar.style.right = "-300px"
})
// closesidebar.addEventListener('click', ()=>{
//   sidebar.style.right = "0px";
// })
