const body = document.querySelector('body');
const header = document.querySelector('.header');
const menu = document.querySelector('.hamburguer');
const overlay = document.querySelector('.overlay');
const popup_menu = document.querySelector('.popup-menu');

console.log(document);
menu.addEventListener('click',e=>{
    e.preventDefault();

    if(header.classList.contains('menu-on')){
        body.classList.remove('noscroll');

        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        
        header.classList.remove('menu-on');
        
        popup_menu.classList.remove('fade-in');
        popup_menu.classList.add('fade-out');
    }
    else{
        body.classList.add('noscroll');

        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');

        header.classList.add('menu-on');
        
        popup_menu.classList.remove('fade-out');
        popup_menu.classList.add('fade-in');
    }
});