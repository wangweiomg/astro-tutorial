const menu = document.querySelector('.menu');
    menu?.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true' || false;
    menu.setAttribute('aria-expanded', `${!expanded}`);
});