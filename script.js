// SETUP: Change this to the email address where you want enquiries sent.
// This static demo opens the visitor's email app; it does not silently transmit data.
const CONTACT_EMAIL = 'hello@example.com';

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.getElementById('form-status');
  if (!form.checkValidity()) {
    form.reportValidity();
    status.textContent = 'Please complete all required fields.';
    return;
  }
  if (CONTACT_EMAIL === 'hello@example.com') {
    status.textContent = 'Site owner: set CONTACT_EMAIL in script.js before using this form.';
    return;
  }
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const subject = form.elements.subject.value;
  const message = form.elements.message.value.trim();
  const subjectText = `Skeemba enquiry: ${subject}`;
  const bodyText = `Name: ${name}\nEmail: ${email}\nProject type: ${subject}\n\n${message}`;
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
  status.textContent = 'Your email app should open with a prepared message. Please press Send there to complete the enquiry.';
  window.location.href = mailto;
});
