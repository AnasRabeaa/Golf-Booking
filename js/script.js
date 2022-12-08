// =============== Nav Bar Menu ===================================================================
let sideBar = document.getElementById('navbarMenu');
let menuBars = document.getElementById('mainMenuOpen');
let backdrop = document.getElementById('backdrop');
let MenuClose = document.getElementById('mainMenuClose');
const mediaSize = 992;

menuBars.onclick = () => {
    sideBar.classList.toggle('active');
    backdrop.classList.toggle('active');
}

MenuClose.onclick = () => {
    sideBar.classList.toggle('active');
    backdrop.classList.toggle('active');
}

window.addEventListener("resize", function(){
    if(this.innerWidth > mediaSize){
        sideBar.classList.remove('active');
        backdrop.classList.remove('active');
    }
});

let navLink = document.querySelector('.nav-link');
let navItem = document.querySelector('.nav-item');

navLink.addEventListener('click', () => navItem.classList.toggle('show'));
// ==================================================================================================


// ================ Languge side bar ================================================================
let languageCanvas = document.querySelector('#canvas');
let offCanvas = document.querySelector('#offCanvas1');
let closeButton = document.querySelector('.close');


languageCanvas.onclick = () => {
    offCanvas.classList.toggle('active');
    backdrop.classList.toggle('active');
}

closeButton.onclick = () => {
    offCanvas.classList.toggle('active');
    backdrop.classList.toggle('active');
}
// ===================================================================================================


// ====================== Search =====================================================================
const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = ["Amber Baltic Golf Club",
    "Armada Golf Club",
    "Barlborough Links Golf Club",
    "Borrowdale Brooke Golf Club",
    "Bucharest Golf Club",
    "Chapman Golf Club",
    "Cluny Activities",
    "Dar Gymkhana Golf Course",
    "Dune Golf & Racing",
    "First Warsaw Golf & Country Club",
    "len Waverley Golf Course 18H",
    "Golf Club Ada",
    "Finland", "France", "Germany",
    "Hungary",
    "Iceland", "India", "Indonesia",
    "Iran", "Italy", "Japan", "Malaysia",
    "Maldives", "Mexico",
    "Morocco", "Nepal", "Netherlands",
    "Nigeria", "Norway", "Pakistan",
    "Peru", "Russia", "Romania",
    "South Africa", "Spain", "Sri Lanka",
    "Sweden", "Switzerland",
    "Thailand", "Turkey", "Uganda", "Ukraine",
    "United States", "United Kingdom", "Vietnam"];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
// ===================================================================================================

// ===================================== Slider ======================================================
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 2) {
        counter = 1;
    }
}, 5000);
// ===================================================================================================