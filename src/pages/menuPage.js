import '../css/menuPage.css'
import signatureMenu from '../components/signatureMenu';

const renderMenuPage = (parent) => {
    parent.appendChild(signatureMenu);
}

export default renderMenuPage;