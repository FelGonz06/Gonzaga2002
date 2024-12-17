const loginForm = document.querySelector('.login_form');
const usernameInput = document.getElementById('uname');
const passwordInput = document.getElementById('psw');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === 'Arfel' && password === 'Gonzaga') {
    
    window.location.href = 'Home.html'; 
  }
   else {
    alert('Invalid username or password.');
  }
});