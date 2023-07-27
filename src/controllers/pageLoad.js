import header from '../components/header.js';
import footer from '../components/footer.js';
import renderHomePage from '../pages/homePage.js';

const pageLoad = () => {
    const body = document.querySelector('body');

    body.appendChild(header, body.firstChild);

    const content = document.createElement('div');
    content.id = 'content';
    body.appendChild(content);

    body.appendChild(footer);

    renderHomePage(content);
};

export default pageLoad;