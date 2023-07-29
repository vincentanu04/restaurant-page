import pageLoad from "./controllers/pageLoad";
import renderHomePage from "./pages/homePage";
import renderMenuPage from "./pages/menuPage";
import renderAboutPage from "./pages/aboutPage";
import renderContactPage from "./pages/contactPage";

pageLoad();
const content = document.getElementById('content');

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(nav => {
    nav.addEventListener('click', () => {
        content.innerHTML = '';
        window.scrollTo(0,0);

        if (nav.dataset.page === 'Home') {
            renderHomePage(content);
        }
        else if (nav.dataset.page === 'Menu') {
            renderMenuPage(content)
        }
        else if (nav.dataset.page === 'About') {
            renderAboutPage(content);
        }
        else if (nav.dataset.page === 'Contact') {
            renderContactPage(content);
        }
    });
});