// =============== Nav Bar Menu =============================
let sideBar = document.getElementById('navbarMenu');
let menuBars = document.getElementById('mainMenuOpen');
let backdrop = document.getElementById('backdrop');
let MenuClose = document.getElementById('mainMenuClose');

menuBars.onclick = () => {
    sideBar.classList.toggle('active');
    backdrop.classList.toggle('active');
}

MenuClose.onclick = () => {
    sideBar.classList.toggle('active');
    backdrop.classList.toggle('active');
}




let navLink = document.querySelector('.nav-link');
let navItem = document.querySelector('.nav-item');

navLink.onclick = () => {
    navItem.classList.toggle('show');
}
// ============================================================

