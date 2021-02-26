const header = document.querySelector('.header');
const menu = document.querySelector('.hamburguer');
const overlay = document.querySelector('.overlay');
const popup_menu = document.querySelector('.popup-menu');

menu.addEventListener('click',e=>{
    e.preventDefault();
    
    if(header.classList.contains('menu-on')){
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        
        header.classList.remove('menu-on');
        
        popup_menu.classList.remove('fade-in');
        popup_menu.classList.add('fade-out');
    }
    else{
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');

        header.classList.add('menu-on');
        
        popup_menu.classList.remove('fade-out');
        popup_menu.classList.add('fade-in');
    }
});