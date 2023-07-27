import logo from '../components/logo.js';
import newButton from '../builders/buttons.js';
import myImage from '../img/heroImg.jpg';

const hero = document.createElement('section');
hero.classList.add('hero');

const heroLeft = document.createElement('div');
heroLeft.classList.add('hero-left');

const title = document.createElement('div');
title.classList.add('title');
title.appendChild(logo);
const h1 = document.createElement('h1');
h1.innerHTML = 'Nyam<span>!</span>';
title.appendChild(h1);

const p = document.createElement('p');
const heroText = 'Lorem ipsum dolor sit, amet consectetur \
                adipisicing elit. Dicta, animi quasi.';
p.innerHTML = heroText;

const buttons = document.createElement('div');
buttons.classList.add('buttons');
buttons.appendChild(newButton('Menu'));
buttons.appendChild(newButton('Contact'));

heroLeft.appendChild(title);
heroLeft.appendChild(p);
heroLeft.appendChild(buttons);

const heroImage = new Image();
heroImage.src = myImage;

hero.appendChild(heroLeft);
hero.appendChild(heroImage);

export default hero;