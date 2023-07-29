
//   <section class="menu">
//     <h1>Menu</h1>
//   </section>

import newMenu from "./builders/buildMenuItem";
import img from '../img/chicken-wing.jpg';
import img2 from '../img/dumpling.jpg';
import img3 from '../img/noodle.jpg';

const signatureMenu = document.createElement('section');
signatureMenu.classList.add('signature');

const title = document.createElement('h1');
title.innerHTML = 'Our Signature Items!';

const menuWrapper = document.createElement('div');
menuWrapper.classList.add('signature-menu-wrapper');

const signatureMenuItems = [ 
    newMenu(img2, 'Pan-Fried Vegetable Dumplings', '9.99', 'A delightful medley of fresh vegetables and aromatic herbs encased in a golden, crispy pan-fried dumpling shell.'),
    newMenu(img3, 'Elevated Kolo Mee', '14.99', 'Savory egg noodles elevated with perfectly seasoned pork mince and velvety half-boiled egg, epitomizing Kolo elegance.'),
    newMenu(img, 'Imperial Wing Feast', '19.99', 'Savor the regal Imperial Wing Feast, featuring tender chicken wings marinated in exquisite Asian-inspired spices and secret sauces.'),
];

for (const item of signatureMenuItems) {
    menuWrapper.appendChild(item);
}

signatureMenu.appendChild(title);
signatureMenu.appendChild(menuWrapper);

export default signatureMenu;