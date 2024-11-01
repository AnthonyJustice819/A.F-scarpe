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

const addtocart = document.querySelectorAll('.listproduct .item .addcart').forEach(button => {
   addtocart.addEventListener('click', () => {
        // Get the current count from the span
        const cartCountSpan = document.getElementById('cart-count');
        let currentCount = parseInt(cartCountSpan.textContent);

        // Increase the count
        currentCount += 1;

        // Update the span with the new count
        cartCountSpan.textContent = currentCount;
    });
});