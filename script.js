const hamburgerBtn = document.querySelector('.hamburger_btn');
const navBar = document.getElementById('nav');
const wrapper = document.querySelector('.wrapper');

hamburgerBtn.addEventListener('click', () => {
   hamburgerBtn.classList.toggle('active'); 
   navBar.classList.toggle('show');

});