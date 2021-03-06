// Prevent right clicking
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
}, false);

// DOM SELECTIONS
const
  menuBtn = document.querySelector('.menu-btn'),
  menu = document.querySelector('.menu'),
  menuNav = document.querySelector('.menu-nav'),
  menuBranding = document.querySelector('.menu-branding'),
  navItem = document.querySelectorAll('.nav-item');

// Menu initial appearance
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItem.forEach(item => item.classList.add('show'));
    // show menu
    showMenu = true;
  } else {

    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItem.forEach(item => item.classList.remove('show'));
    // show menu
    showMenu = false;
  }
}

// Alert when projects try open with mobile devices
const projectBtn = document.querySelectorAll('.indesktop');
projectBtn.forEach(btn => btn.addEventListener('click', notCool));
function notCool(e) {
  const isMobile = /iPhone|iPod|Andriod/i.test(navigator.userAgent);
  if (isMobile) {
    alert('Optimize for desktop! Open with desktop');
    // return false;
    e.preventDefault();
  }
  // alert("infolingk clicked")
};

