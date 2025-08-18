function toggleMenu(){
  const nav = document.getElementById('navlinks');
  if(!nav) return;
  nav.classList.toggle('open');
}
function openMail(e){
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('input[placeholder="Name"]').value || '';
  const email = form.querySelector('input[type=email]').value || '';
  const msg = form.querySelector('textarea').value || '';
  const subject = encodeURIComponent('ForumOne MUN Query');
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
  window.location.href = `mailto:forumonemun@gmail.com?subject=${subject}&body=${body}`;
  return false;
}
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
});
