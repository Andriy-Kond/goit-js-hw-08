// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

// const throttleOfLodash = require('lodash.throttle');
// const feedbackForm = document.querySelector('.feedback-form');

// feedbackForm.addEventListener('submit', localStorageSubmit);
// feedbackForm.addEventListener(
//   'input',
//   throttleOfLodash(localStorageInput, 500)
// );

// let inputValues = {};

// function downloadLocalStorage() {
//   if (localStorage.length !== 0) {
//     const lsObj = localStorage.getItem('feedback-form-state');
//     const jsObj = JSON.parse(lsObj);
//     inputValues.email = jsObj.email;
//     inputValues.message = jsObj.message;
//     feedbackForm.elements.email.value = inputValues.email;
//     feedbackForm.elements.message.value = inputValues.message;
//   }
// }
// downloadLocalStorage();

// function localStorageInput(e) {
//   // Перевірка на null - це КОСТИЛЬ: не розумію чому замість e.currentTarget випадає null якщо швидко вводити текст
//   if (e.currentTarget !== null) {
//     inputValues.email = e.currentTarget.elements.email.value;
//     inputValues.message = e.currentTarget.elements.message.value;
//   }
//   const lsObj = JSON.stringify(inputValues);
//   localStorage.setItem('feedback-form-state', lsObj);
// }

// function localStorageSubmit(e) {
//   console.log('inputValues', inputValues);
//   e.preventDefault();

//   localStorage.clear();
//   feedbackForm.elements.email.value = '';
//   feedbackForm.elements.message.value = '';
// }

const throttleOfLodash = require('lodash.throttle');
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('submit', localStorageSubmit);
feedbackForm.addEventListener(
  'input',
  throttleOfLodash(localStorageInput, 500)
);

let inputValues = {};

function downloadLocalStorage() {
  if (localStorage.length !== 0) {
    const lsObj = localStorage.getItem('feedback-form-state');
    const jsObj = JSON.parse(lsObj);
    inputValues.email = jsObj.email;
    inputValues.message = jsObj.message;
    feedbackForm.elements.email.value = inputValues.email;
    feedbackForm.elements.message.value = inputValues.message;
  }
}
downloadLocalStorage();

function localStorageInput(e) {
  const value = e.target.value;
  e.target.name === 'email'
    ? (inputValues.email = value)
    : (inputValues.message = value);

  const lsObj = JSON.stringify(inputValues);
  localStorage.setItem('feedback-form-state', lsObj);
}

function localStorageSubmit(e) {
  console.log('inputValues', inputValues);
  e.preventDefault();

  localStorage.clear();
  feedbackForm.elements.email.value = '';
  feedbackForm.elements.message.value = '';
}
