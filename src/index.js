
import style from './style.css';
// import spiraxWoff from './spirax-regular-webfont.woff';
// import spiraxWoff2 from './spirax-regular-webfont.woff2';
// import eraserWoff from './eraserregular-webfont.woff';
// import earaserWoff2 from './eraserregular-webfont.woff2';
const content = document.querySelector('#content');
const homepage = document.querySelector('.homepage');

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const aboutBtn = document.querySelector('.about');

const btns = [homeBtn, menuBtn, aboutBtn];

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        switch (btn) {
            case homeBtn:
                const home = require('./home.js')
                console.log('home');
                break;
            case menuBtn:
                remove(home);
                const menu = require('./menu.js')
                console.log('menu');
                break;
            case aboutBtn:
                const about =  require('./about.js');
                console.log('about');
            default:
                console.log('home');
                break;
        }
    })
});
                
