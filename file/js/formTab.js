var emailForm = document.querySelector('.contactsFormEmail');
var telegramForm = document.querySelector('.contactsFormTelegram');
var emailButton = document.querySelector('.contactsFormButton');
var telegramButton = document.querySelector('.contactsFormButton:not(.active)');

function toggleForms() {
  var isEmailActive = emailForm.classList.contains('enable');

  if (isEmailActive) {
    emailForm.classList.remove('enable');
    telegramForm.classList.add('enable');
    emailForm.style.opacity = 0; // Устанавливаем начальное значение прозрачности
    telegramForm.style.opacity = 1; // Показываем форму телеграма
    emailForm.style.display = 'none'; // Скрываем форму почты
    emailButton.classList.remove('active');
    telegramButton.classList.add('active');
    
    // Анимация появления формы телеграма
    telegramForm.style.display = 'block';
    setTimeout(function() {
      telegramForm.style.transition = 'opacity 0.3s ease-in-out';
      telegramForm.style.opacity = 1;
    }, 10);
  } else {
    emailForm.classList.add('enable');
    telegramForm.classList.remove('enable');
    emailForm.style.opacity = 1;
    telegramForm.style.opacity = 0;
    telegramForm.style.display = 'none';
    emailForm.style.display = 'block';
    emailButton.classList.add('active');
    telegramButton.classList.remove('active');
    
    // Анимация появления формы почты
    emailForm.style.display = 'block';
    setTimeout(function() {
      emailForm.style.transition = 'opacity 0.3s ease-in-out';
      emailForm.style.opacity = 1;
    }, 10);
  }
}

emailButton.addEventListener('click', toggleForms);
telegramButton.addEventListener('click', toggleForms);