// Auto update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form demo
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(form);
  const obj = Object.fromEntries(data.entries());
  document.getElementById('formResult').textContent = 
    'Thanks ' + obj.name + '! Your message has been received (demo).';
  form.reset();
});