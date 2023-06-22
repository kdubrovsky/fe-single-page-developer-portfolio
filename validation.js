import { form, fields } from './config'

const setValid = function (field) {
    field.classList.remove('error');
    field.nextElementSibling.style.display = 'none';
}

const checkValidity = function (field) {

    for (let rule of fields[field.id].rules) {
        if (!rule.check(field)) return rule.errorText
    }
    return false;
}

const showError = function (field, message) {
    field.classList.add('error');
    field.nextElementSibling.textContent = message;
    field.nextElementSibling.style.display = 'block';
}


// handlers

const blurHandler = function (e) {
    const field = e.target;
    const error = checkValidity(field);

    if (error) showError(field, error); else setValid(field);
}

const inputHandler = function (e) {
    setValid(e.target);
}

const formHandler = function (e) {
    e.preventDefault();
    let isFormValid = true;
    Object.values(fields).forEach(
        id => {
            const field = id.element;
            const error = checkValidity(field);
            if (error) {
                showError(field, error);
                isFormValid = false;
            } else setValid(field);
        }
    );
    if (isFormValid)
        console.log('Form submitted!');
    else
        console.log('Form is NOT submitted!')
}


for (let id in fields) {
    fields[id].element = document.getElementById(id);
    fields[id].element.addEventListener('blur', blurHandler);
    fields[id].element.addEventListener('input', inputHandler);
}

form.addEventListener('submit', formHandler);
