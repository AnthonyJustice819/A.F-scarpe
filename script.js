const btn = document.querySelector('header #checkbtn');
const menuList = document.querySelector('nav #menuList');
const list = document.querySelectorAll('nav li');
const cartNum = document.querySelector('.cartnum');
const addtocart = document.querySelectorAll('.addcart');
const carticn = document.querySelector('.carticon');
const cartsection = document.querySelector('.cartTab');
const closecart = document.querySelector('.close');
const carttTab = document.querySelector('.cartTab')
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


// let counter = 0;

// addtocart.forEach(function(item) {
//     item.addEventListener('click', (e) => {
//         e.preventDefault();
//         counter += 1;
//         cartNum.innerText = counter;
//     });
// });

const numberToJapanese = {
    // 0: 'ゼロ',
    1: 'いち',
    2: 'に',
    3: 'さん',
    4: 'し',
    5: 'ご',
    6: 'ろく',
    7: 'なな',
    8: 'はち',
    9: 'きゅう',
    10: 'じゅう'
    // Add more mappings if you want to support numbers greater than 10
};
let counter = 0;

addtocart.forEach(function(item) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        counter += 1;
        
        // Update the cart number to its Japanese equivalent
        cartNum.innerText = numberToJapanese[counter] || counter; // Default to the number if not mapped
    });
});


cartsection.style.width = "0px";

carticn.addEventListener('click', function(e){
    if (cartsection.style.width == "0px") {
        cartsection.style.width = "270px"
        // carttTab.style.right = "2em";
        if (window.innerWidth > 1024) {
            carttTab.style.right = "2em";
        }
    } else {
       cartsection.style.width = "0px"
       carttTab.style.right = "0";
    }
})
closecart.addEventListener('click', ()=> {
       cartsection.style.width = "0px"
})

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const totalDisplay = document.querySelector('.total');
    const cartList = document.getElementById('cartitems');
  
    // Function to update the cart display
    function updateCartDisplay() {
      cartList.innerHTML = ''; // Clear the current list
      let total = 0;
  
      cartItems.forEach(item => {
        const li = document.createElement('li');
        
        // Create an image element
        const img = document.createElement('img');
        img.src = item.image; // Set the image source
        img.alt = item.name; // Set alt text
        img.style.width = '50px'; // Set a width for the image (optional)
        img.style.height = 'auto'; // Maintain aspect ratio (optional)
        
        // Append the image to the list item
        li.appendChild(img);
        
        // Add the text content
        li.appendChild(document.createTextNode(`${item.name} - ${item.price}`));
        cartList.appendChild(li);
        total += item.price;
      });
  
      totalDisplay.textContent = total;
    }
  
    // Event listener for Add to Cart buttons
    document.querySelectorAll('.addcart').forEach(button => {
      button.addEventListener('click', (event) => {
        const itemElement = event.target.closest('.item');
        const itemName = itemElement.querySelector('h2').textContent;
        const itemPrice = parseInt(itemElement.querySelector('.price').textContent.replace('¥', ''), 10);
        const itemImage = itemElement.querySelector('img').src; // Assuming there is an <img> in the item

        // Add item to the cart with image
        cartItems.push({ name: itemName, price: itemPrice, image: itemImage });
        updateCartDisplay();
      });
    });
  
    // Close button functionality
    document.querySelector('.close').addEventListener('click', () => {
      document.querySelector('.cartTab').style.display = 'none';
    });
  
    // Checkout button functionality (you can expand this later)
    document.querySelector('.checkout').addEventListener('click', () => {
      alert('Proceeding to checkout...');
      // You can add more checkout logic here
    });
});