const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.mobile-menu a').forEach((link) => link.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const products = {
  meter: { type: 'Blood glucose monitoring', title: 'OnPoint GH82 Monitoring System', description: 'A blood glucose monitoring system designed for everyday use in home health routines and clinical settings.', image: 'https://colexabiosensor.com/wp-content/uploads/2025/03/OnPoint-Strip-image-e1742123798188.png', facts: [['Use', 'Home and clinical use'], ['System', 'OnPoint GH82'], ['Focus', 'Routine blood glucose monitoring']] },
  strip: { type: 'Blood glucose monitoring', title: 'OnPoint GH82 Test Strip', description: 'For quantitative measurement of glucose in fresh capillary whole blood using the OnPoint GH82 system.', image: 'https://colexabiosensor.com/wp-content/uploads/2025/03/OnPoint-Strip-image-2.png', facts: [['Use', 'Home use'], ['Sample', 'Fresh capillary whole blood'], ['Compatibility', 'OnPoint GH82 system']] },
  hiv: { type: 'Rapid diagnostic test', title: 'STANDARD™ Q HIV 1/2 Ab 3-Line Test', description: 'A rapid chromatographic immunoassay for the qualitative detection of HIV antibodies.', image: 'https://colexabiosensor.com/wp-content/uploads/2025/03/HIV-1-2-3-2.png', facts: [['Use', 'Professional use'], ['Sample', 'Serum, plasma or whole blood'], ['Purpose', 'Qualitative HIV antibody detection']] }
};

const dialog = document.querySelector('#product-dialog');
document.querySelectorAll('[data-product]').forEach((button) => button.addEventListener('click', () => {
  const product = products[button.dataset.product];
  document.querySelector('#dialog-type').textContent = product.type;
  document.querySelector('#dialog-title').textContent = product.title;
  document.querySelector('#dialog-description').textContent = product.description;
  const image = document.querySelector('#dialog-image');
  image.src = product.image;
  image.alt = product.title;
  document.querySelector('#dialog-facts').innerHTML = product.facts.map(([label, value]) => `<div><strong>${label}</strong>${value}</div>`).join('');
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.querySelector('.form-status');
  status.textContent = 'Demo only: your enquiry is ready to connect to a configured inbox.';
});