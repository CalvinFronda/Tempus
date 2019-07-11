const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    // Converts empty field to an empty string so we can use validator

    data.email = !isEmpty(data.password) ? data.password : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid'
    }

    // Password check
    if (Validator.isEmpty(data.password)) {
        errors.pasword = 'Password field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };

};
