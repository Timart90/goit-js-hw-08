import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localKey = 'feedback-form-state';
const getStorage = JSON.parse(localStorage.getItem(localKey));

if(getStorage){
    form.elements.email.value = getStorage.email;
    form.elements.message.value = getStorage.message;
    }

function handlerInput() {
    const data = {
        email: form.elements.email.value,
        message: form.elements.message.value, 
           };
    console.log(data);
    localStorage.setItem(localKey, JSON.stringify(data));
}

form.addEventListener('submit', fnSubmit);
function fnSubmit(e) {
    e.preventDefault();
    if (form.elements.email.value === '' || form.elements.message.value === '') {
    return alert('Заповніть усі поля!');
 }
    console.log(JSON.parse(localStorage.getItem(localKey)));
    form.reset();
    localStorage.removeItem(localKey);
     
};

 form.addEventListener('input', throttle(handlerInput, 500));
