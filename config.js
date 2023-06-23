export const formId = 'contact-form';

export const fields = {

    name: {
        errors: {
            required: 'Please, fill out your name'
        }
    },

    mail: {
        errors: {
            required: 'Please, fill out your e-mail',
            mail: 'Email is not valid'
        }
    },

    message: {
        errors: {
            required: 'Please, don\'t forget about your message'
        }
    },
};
