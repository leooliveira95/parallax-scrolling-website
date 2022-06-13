let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let sec = document.getElementById('sec')
let header = document.querySelector('header');

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');



window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 0.80 + 'px';
    mountains_behind.style.top = value * 0.25 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.4 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})
