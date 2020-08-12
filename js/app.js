let header = document.querySelector('header');

let mybtn = document.querySelector('.navbar-icon').addEventListener('click', () => {
    header.classList.toggle('showAndHideMenu');
});