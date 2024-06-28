// document.addEventListener('DOMContentLoaded', function () {
//   getcookiedata();
// });

const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (event) => {
  event.preventDefault();

  // Username validation
  if (username.value.trim() === '') {
    error(username, 'Username cannot be empty');
  } else {
    clearError(username);
    // Additional validation logic for username if needed
  }

  // Password validation (example)
  if (password.value.trim() === '') {
    error(password, 'Password cannot be empty');
  } else {
    clearError(password);
    // Additional validation logic for password if needed
  }

  // Submit form if all validations pass
  if (username.value.trim() !== '' && password.value.trim() !== '') {
    // Optionally, submit the form or perform further actions
    console.log('Form submitted successfully');
    // Example: document.querySelector('form').submit();
  }
});

function error(element, msg) {
  element.style.border = '3px red solid';
  const parent = element.parentElement;
  const p = parent.querySelector('p');
  p.textContent = msg;
  p.style.visibility = 'visible';
}

function clearError(element) {
  element.style.border = ''; // Reset border style
  const parent = element.parentElement;
  const p = parent.querySelector('p');
  p.textContent = ''; // Clear error message
  p.style.visibility = 'hidden'; // Hide error message
}
