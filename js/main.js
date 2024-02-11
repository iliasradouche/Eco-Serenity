const navTriggerBtn = document.querySelector('#nav_trigger_btn');
const navMenu = document.querySelector('#nav_menu');

// Event Listener

navTriggerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open')
})