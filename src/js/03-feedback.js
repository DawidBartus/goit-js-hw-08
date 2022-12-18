import _throttle from 'lodash.throttle';

const KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let formStorage = {};

form.addEventListener(
  'input',
  _throttle(e => {
    formStorage[e.target.name] = e.target.value;
    localStorage.setItem(KEY, JSON.stringify(formStorage));
  }, 500)
);

let localSavedMessage = () => {
  let formData = JSON.parse(localStorage.getItem(KEY));

  if (formData.email) form.email.value = formData.email;
  if (formData.message) form.message.value = formData.message;
};
localSavedMessage();

form.addEventListener('submit', e => {
  e.preventDefault();

  console.log(formStorage);
  form.email.value = '';
  form.message.value = '';
  localStorage.clear();
  formStorage = {};
});
