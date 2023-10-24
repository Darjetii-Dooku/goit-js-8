import throttle from "lodash.throttle";

const formJS = document.querySelector('.feedback-form');
formJS.addEventListener('input', throttle(handlerInp, 500));
const JS_STORAGE = 'feedback-form-state';
let JsformKey = {email: '', message: ''}
if (!localStorage.getItem(JS_STORAGE) === false) {
    formJS[0].value = JSON.parse(localStorage.getItem(JS_STORAGE)).email;
formJS[1].value = JSON.parse(localStorage.getItem(JS_STORAGE)).message;
}

function handlerInp(evt) {
    if (evt.target.name === 'message') {
        JsformKey.message = evt.target.value;
    }
    if (evt.target.name === 'email') {
        JsformKey.email = evt.target.value
    }
    localStorage.setItem(JS_STORAGE, JSON.stringify(JsformKey));
};
formJS.addEventListener('submit', submitHandler);
function submitHandler(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(JS_STORAGE)));
    e.currentTarget.reset();
    localStorage.removeItem(JS_STORAGE);
}