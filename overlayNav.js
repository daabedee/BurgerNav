const trigger = document.querySelector('.trigger');
const nav = document.querySelector('.full-screen-nav');
const backdrop = document.querySelector('.backdrop');
const backdropClose = document.querySelector('.backdrop') 

trigger.addEventListener('click', () => nav.classList.add('open-nav'));
backdrop.addEventListener('click', () => nav.classList.remove('open-nav'));

//backdrop.addEventListener('onkeydown', () => nav.classList.add('close-nav'));
//backdropClose.addEventListener('onkeydown', () => nav.classList.remove('backdrop'));




  
  