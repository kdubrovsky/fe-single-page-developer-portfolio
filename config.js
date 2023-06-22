import { isValidEmail, isNotEmpty } from "./checks";

export const form = document.querySelector('.contact__form');

export const fields = {
    name: {
        rules: [
            {
                check: isNotEmpty,
                errorText: 'Please, fill out your name'
            }
        ]
    },
    mail: {
        rules: [
            {
                check: isNotEmpty,
                errorText: 'Please, fill out your e-mail'
            },
            {
                check: isValidEmail,
                errorText: 'Email is not valid'
            }]
    },
    message: {
        rules: [
            {
                check: isNotEmpty,
                errorText: 'Please, don\'t forget about your message'
            }
        ]
    },
};

