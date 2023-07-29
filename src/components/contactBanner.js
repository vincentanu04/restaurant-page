
const contactBanner = document.createElement('section');
contactBanner.classList.add('banner');

const div = document.createElement('div');
const h1 = document.createElement('h1');
h1.innerHTML = "Contact Us";
const p = document.createElement('p');
p.innerHTML = 'Contact our friendly staff!';

div.appendChild(h1);
div.appendChild(p);

contactBanner.appendChild(div);

export default contactBanner;