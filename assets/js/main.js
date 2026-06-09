// Mobile drawer
const toggle = document.getElementById('navToggle');
const drawer = document.getElementById('mobileDrawer');
const closeBtn = document.getElementById('drawerClose');
if(toggle && drawer) {
  toggle.addEventListener('click', () => drawer.classList.toggle('open'));
  if(closeBtn) closeBtn.addEventListener('click', () => drawer.classList.remove('open'));
}
// Back to top
const backBtn = document.getElementById('backToTop');
if(backBtn) backBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
// Newsletter
const form = document.getElementById('footer-newsletter');
if(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if(email) alert('Subscribed (demo): ' + email);
  });
}
