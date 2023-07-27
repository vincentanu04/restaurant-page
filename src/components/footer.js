const footer = document.createElement('footer');

const p1 = document.createElement('p');
p1.innerHTML = 'Copyright &copy; 2023 | Powered by Vincent Tanuwidjaja';
const p2 = document.createElement('p');
p2.innerHTML = 'All rights reserved';

footer.appendChild(p1);
footer.appendChild(p2);

export default footer;