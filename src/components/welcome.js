import facebookLogo from "./facebookLogo";
import instagramLogo from "./instagramLogo";


const welcome = document.createElement('section');
welcome.classList.add('welcome');

const h2 = document.createElement('h2');
const welcomeTitle = 'Welcome to Nyam!';
h2.innerHTML = welcomeTitle;

const div = document.createElement('div');
const h3 = document.createElement('h3');
const subTitle = 'Authentic Malaysian foods, serving since 1975.';
h3.innerHTML = subTitle;
const p1 = document.createElement('p');
p1.innerHTML = 'Founded in the deary city of Subang Jaya, Malaysia.';

const p2 = document.createElement('p');
p2.innerHTML = 'Follow our Social Media.'

div.appendChild(h3);
div.appendChild(p1);

welcome.appendChild(h2);
welcome.appendChild(div);
welcome.appendChild(p2);
welcome.appendChild(instagramLogo);
welcome.appendChild(facebookLogo);

export default welcome;