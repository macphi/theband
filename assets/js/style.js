const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
//Ham hien thi modal 
function showBuyTickets() {
  modal.classList.add('open')
}
// Ham an khoi man hinh remove 
function hideBuyTickets() {
  modal.classList.remove('open')
}
// Lap qua tung the button va nghe hanh vi click
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', showBuyTickets)
}
// Remove khi click vao button close
modalClose.addEventListener('click', hideBuyTickets)
// remove khi an ra ngoai 
modal.addEventListener('click', hideBuyTickets)
// Click vao trong khong bi an di
modalContainer.addEventListener('click', function (event) {
  event.stopPropagation()
})

// JS RESPONSIVE
// Dong mo Mobile MENU
var header = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu')
var headerHeight = header.clientHeight

mobileMenu.onclick = function () {
  var isClosed = header.clientHeight === headerHeight
  if (isClosed) {
    header.style.height = 'auto'
  } else {
    header.style.height = null
  }
}

// Tu dong dong khi chon Menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i]

  menuItem.onclick = function(){
    header.style.height = null
  }
}