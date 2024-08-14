
/* ===================  toggle icon navbar======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/* ===================  scroll section active link======*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heigth) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
 
    });


    
/* =================== sticky navbar ======*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* ===================  remove toggle icon and navbar when click navbar link======*/


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');



   
};  

//typer js

const typed = new Typed(".typetext", {
    strings: [
       "web and mobile Developper",
       "tiktoker",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
 });


 ScrollReveal({
    reset: true,
    distance: "100px",
    duration: 2000,
 });
 ScrollReveal().reveal(".services-box , .heading", { origin: "top" });
 ScrollReveal().reveal(".home-content,.footer ", { origin: "left" });
 ScrollReveal().reveal(".portfolio-box ", { origin: "bottom" });