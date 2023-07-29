import contactBanner from "../components/contactBanner";
import contactForm from "../components/contactForm";
import '../css/contactPage.css';

const renderContactPage = (parent) => {
    parent.appendChild(contactBanner);
    parent.appendChild(contactForm);
}

export default renderContactPage;