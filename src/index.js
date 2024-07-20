import { home } from './home.js'
import { menu } from './menu.js'
import { about } from './about.js';

import style from './style.css';
// import spiraxWoff from './spirax-regular-webfont.woff';
// import spiraxWoff2 from './spirax-regular-webfont.woff2';
// import eraserWoff from './eraserregular-webfont.woff';
// import earaserWoff2 from './eraserregular-webfont.woff2';
const content = document.querySelector('#content');


const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const aboutBtn = document.querySelector('.about');

const btns = [homeBtn, menuBtn, aboutBtn];

let currentPage = 'home';

function tabSwitcher() {
    const homepage = document.querySelector('.homepage');
    const menupage = document.querySelector('.menupage');
    const aboutpage = document.querySelector('.aboutpage');
    if (currentPage == 'home') {
        home();
        if (menupage !== null) {
            menupage.remove()
        } else if (aboutpage !== null) {
            aboutpage.remove();
        }
    } else if (currentPage == 'menu') {
        menu();
        if (homepage !== null) {
            homepage.remove();
        } else if (aboutpage !== null) {
            aboutpage.remove();
        }
    } else if (currentPage == 'about') {
        about();
        if (homepage !== null) {
            homepage.remove();
        } else if (menupage !== null) {
            menupage.remove();
        }
    } else {
        return;
    }
}
tabSwitcher();

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        switch (btn) {
            case homeBtn:
                currentPage = 'home';
                console.log('home');
                tabSwitcher();
                break;
            case menuBtn:
                currentPage = 'menu';
                console.log('menu');
                tabSwitcher();
                break;
            case aboutBtn:
                currentPage = 'about';
                console.log('about');
                tabSwitcher();
            default:
                console.log('home');
                break;
        }
    })
});


