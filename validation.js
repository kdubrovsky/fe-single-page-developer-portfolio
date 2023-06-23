import { formId, fields } from './config';
import { check } from './check';

// -----------------------------------------------------------------

const setValid = function (id) {
    fields[id].input.classList.remove('error');
    fields[id].message.style.display = 'none';
}

const setInvalid = function (id, message) {
    fields[id].input.classList.add('error');
    fields[id].message.textContent = message;
    fields[id].message.style.display = 'block';
}

const checkValidity = function (id) {

    const input = fields[id].input;
    const value = input.value;

    if (input.required && !check.isNotEmpty(value))
        return fields[id].errors.required;

    if (input.type === 'email' && !check.isMail(value))
        return fields[id].errors.mail;

    return false;
}

// -----------------------------------------------------------------

const blurHandler = function (e) {
    const id = e.target.id;
    const error = checkValidity(id);

    if (error)
        setInvalid(id, error);
    else
        setValid(id);
}

const inputHandler = function (e) {
    setValid(e.target.id);
}

const formHandler = function (e) {
    e.preventDefault();
    let isFormValid = true;
    Object.keys(fields).forEach(
        id => {
            const error = checkValidity(id);
            if (error) {
                setInvalid(id, error);
                isFormValid = false;
            } else setValid(id);
        }
    );
    if (isFormValid) console.log('Form submitted!');
    else console.log('Form is NOT submitted!')
}

// -----------------------------------------------------------------

for (let id in fields) {
    fields[id].input = document.getElementById(id);
    fields[id].message = fields[id].input.nextElementSibling;
    fields[id].input.addEventListener('blur', blurHandler);
    fields[id].input.addEventListener('input', inputHandler);
}

document.getElementById(formId).addEventListener('submit', formHandler);