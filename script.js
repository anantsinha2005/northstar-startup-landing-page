const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '✕' : '☰';
});

navigation?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '☰';
  });
});

const form = document.querySelector('#contact-form');
const message = document.querySelector('.form-message');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  message.textContent = `Thanks, ${name}! This demo form is ready to be connected to a backend.`;
  form.reset();
});
