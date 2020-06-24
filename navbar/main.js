/**
 * Click handler for the hamburger menu
 *
 * @author Dusan Mitrovic <dusan@dusanmitrovic.xyz>
 * @license GPL-3.0-only https://opensource.org/licenses/GPL-3.0
 */
const navbarSlider = () => {
    const burger = document.querySelector('.navbar-nav-area');
    const navigation = document.querySelector('.navbar');

    burger.addEventListener('click', () => {
        navigation.classList.toggle('navbar-active');
    });
}

window.addEventListener('DOMContentLoaded', () => {
    navbarSlider();
});
