import logo from '../components/logo.js';
import newButton from './builders/buildButton.js';
import myImage from '../img/heroImg.jpg';

const hero = document.createElement('section');
hero.classList.add('hero');

const heroLeft = document.createElement('div');
heroLeft.classList.add('hero-left');

const title = document.createElement('div');
title.classList.add('title');
title.appendChild(logo());
const h1 = document.createElement('h1');
h1.innerHTML = 'Nyam<span>!</span>';
title.appendChild(h1);

const p = document.createElement('p');
const heroText = "Indulge in the Taste of Malaysia at Nyam! - A Flavorful Journey of Malaysian Cuisine!";
p.innerHTML = heroText;

const buttons = document.createElement('div');
buttons.classList.add('buttons');

const menuButton = newButton('Menu');
menuButton.classList.add('nav-item');
menuButton.dataset.page = 'Menu';
buttons.appendChild(menuButton);

const contactButton = newButton('Contact');
contactButton.classList.add('nav-item');
contactButton.dataset.page = 'Contact';
buttons.appendChild(contactButton);

heroLeft.appendChild(title);
heroLeft.appendChild(p);
heroLeft.appendChild(buttons);

const heroImage = new Image();
heroImage.src = myImage;

hero.appendChild(heroLeft);
hero.appendChild(heroImage);

export default hero;