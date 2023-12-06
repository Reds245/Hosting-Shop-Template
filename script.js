// Toggle class active
const navbarList = document.querySelector

('.navbar-list');

// Class Active

document.querySelector('#menu').onclick = () => {
    navbarList.classList.toggle('active');

};

// Closed Navbar with anywhere click

const menu = document.querySelector ('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarList.contains(e.target)){
        navbarList.classList.remove('active')
    }

})