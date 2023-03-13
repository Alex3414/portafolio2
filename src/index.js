let darkmodeActived = false;
const body = document.querySelector('body');
const btnDarkMode = document.getElementById('darkMode');

function togleDarkMode() {
  if(darkmodeActived){
    body.classList.remove('darkmode');
  } else {
    body.classList.add('darkmode');
  }
  darkmodeActived = !darkmodeActived;
}

btnDarkMode.addEventListener('click', togleDarkMode);
