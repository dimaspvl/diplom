var emailForm = document.querySelector('.contactsFormEmail');
var telegramForm = document.querySelector('.contactsFormTelegram');
var emailButton = document.querySelector('.contactsFormButton');
var telegramButton = document.querySelector('.contactsFormButton:not(.active)');

function toggleForms() {
  var isEmailActive = emailForm.classList.contains('enable');

  if (isEmailActive) {
    emailForm.classList.remove('enable');
    emailButton.classList.remove('active');
    telegramForm.classList.add('enable');
    telegramButton.classList.add('active');
  } else {
    telegramForm.classList.remove('enable');
    telegramButton.classList.remove('active');
    emailForm.classList.add('enable');
    emailButton.classList.add('active');
  }
}

emailButton.addEventListener('click', toggleForms);
telegramButton.addEventListener('click', toggleForms);