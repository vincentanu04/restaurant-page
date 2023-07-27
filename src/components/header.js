import logo from './logo.js';
import navListItem from '../builders/navListItem.js';
import newButton from '../builders/buttons.js';

const header = document.createElement('header');

const icon = document.createElement('div');
icon.classList.add('icon');
const h1 = document.createElement('h1');
h1.innerHTML = 'Nyam!';
icon.appendChild(logo);
icon.appendChild(h1);

const nav = document.createElement('nav');
const list = document.createElement('ul');
list.appendChild(navListItem('Home', 'Home'));
list.appendChild(navListItem('Menu', 'Menu'));
list.appendChild(navListItem('About', 'About'));
list.appendChild(navListItem(newButton('Contact').outerHTML, 'Contact'));
nav.appendChild(list);

header.appendChild(icon);
header.appendChild(nav);

export default header;