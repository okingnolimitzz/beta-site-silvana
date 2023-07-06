window.onload = function() {

    window.sr = ScrollReveal ({ reset: true });

    sr.reveal('.container-list', {
        rotate: { x: 50, y: 0, z: 0 },
        duration: 1000
    });

    sr.reveal('.list-container2', {
        rotate: { x: 50, y: 0, z: 0 },
        duration: 1500
    });


    //INICIO MENU RESPONSIVO
   /* let menu = document.querySelector('.icone-menu');
    let navbar = document.querySelector('.menu');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');

    }*/
};  
