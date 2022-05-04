
import throttle from 'lodash.throttle';

const FORM_STORAGE = "feedback-form-state";

const formEl = document.querySelector('.feedback-form');
const formInputEl = document.querySelector('.feedback-form input');
const formTextareaEl = document.querySelector('.feedback-form textarea');


formEl.addEventListener('input', throttle(onInputChanges, 500));
formEl.addEventListener('submit', onFormSubmit);

populateTextarea();

let formData = JSON.parse(localStorage.getItem(FORM_STORAGE)) || {};


function onInputChanges(event) {

    formData[event.target.name] = event.target.value;
    localStorage.setItem(FORM_STORAGE, JSON.stringify(formData))
}


function onFormSubmit(event) {
    event.preventDefault();

    if (formInputEl.value === '' || formTextareaEl.value === '') {
        console.log('Please fill in all the required fields!');
        return;
    } else {
        console.log(formData);
    }

    event.currentTarget.reset();
    localStorage.removeItem(FORM_STORAGE);

    formData = {};
}

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(FORM_STORAGE));

    if (savedMessage) {
        formInputEl.value = savedMessage.email || '';
        formTextareaEl.value = savedMessage.message || '';
    }
}

