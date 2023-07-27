import hero from '../components/hero.js';
import welcome from '../components/welcome.js';

const renderHomePage = (parent) => {
    parent.appendChild(hero);
    parent.appendChild(welcome);
}   

export default renderHomePage;