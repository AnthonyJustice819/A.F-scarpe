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




const numberToJapanese = {
  0: 'ゼロ',
  1: 'いち',
  2: 'に',
  3: 'さん',
  4: 'し',
  5: 'ご',
  6: 'ろく',
  7: 'なな',
  8: 'はち',
  9: 'きゅう',
  10: 'じゅう',
  11: 'じゅういち',
  12: 'じゅうに',
  13: 'じゅうさん',
  14: 'じゅうし',
  15: 'じゅうご',
  16: 'じゅうろく',
  17: 'じゅうなな',
  18: 'じゅうはち',
  19: 'じゅうきゅう',
  20: 'にじゅう',
  21: 'にじゅういち',
  22: 'にじゅうに',
  23: 'にじゅうさん',
  24: 'にじゅうし',
  25: 'にじゅうご',
  26: 'にじゅうろく',
  27: 'にじゅうなな',
  28: 'にじゅうはち',
  29: 'にじゅうきゅう',
  30: 'さんじゅう',
  31: 'さんじゅういち',
  32: 'さんじゅうに',
  33: 'さんじゅうさん',
  34: 'さんじゅうし',
  35: 'さんじゅうご',
  36: 'さんじゅうろく',
  37: 'さんじゅうなな',
  38: 'さんじゅうはち',
  39: 'さんじゅうきゅう',
  40: 'よんじゅう',
  41: 'よんじゅういち',
  42: 'よんじゅうに',
  43: 'よんじゅうさん',
  44: 'よんじゅうし',
  45: 'よんじゅうご',
  46: 'よんじゅうろく',
  47: 'よんじゅうなな',
  48: 'よんじゅうはち',
  49: 'よんじゅうきゅう',
  50: 'ごじゅう',
  51: 'ごじゅういち',
  52: 'ごじゅうに',
  53: 'ごじゅうさん',
  54: 'ごじゅうし',
  55: 'ごじゅうご',
  56: 'ごじゅうろく',
  57: 'ごじゅうなな',
  58: 'ごじゅうはち',
  59: 'ごじゅうきゅう',
  60: 'ろくじゅう',
  61: 'ろくじゅういち',
  62: 'ろくじゅうに',
  63: 'ろくじゅうさん',
  64: 'ろくじゅうし',
  65: 'ろくじゅうご',
  66: 'ろくじゅうろく',
  67: 'ろくじゅうなな',
  68: 'ろくじゅうはち',
  69: 'ろくじゅうきゅう',
  70: 'ななじゅう',
  71: 'ななじゅういち',
  72: 'ななじゅうに',
  73: 'ななじゅうさん',
  74: 'ななじゅうし',
  75: 'ななじゅうご',
  76: 'ななじゅうろく',
  77: 'ななじゅうなな',
  78: 'ななじゅうはち',
  79: 'ななじゅうきゅう',
  80: 'はちじゅう',
  81: 'はちじゅういち',
  82: 'はちじゅうに',
  83: 'はちじゅうさん',
  84: 'はちじゅうし',
  85: 'はち'
}
let counter = 0;

addtocart.forEach(function(item) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        counter += 1;
        
        // Update the cart number to its Japanese equivalent
        cartNum.innerText = numberToJapanese[counter] || counter; // Default to the number if not mapped
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
