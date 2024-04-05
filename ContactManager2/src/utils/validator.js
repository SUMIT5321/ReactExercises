const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validator = {
  validateIsNotEmpty(...[fieldName, value]) {
    return value && value.length > 0 ? null : `${fieldName} can't be empty.`;
  },
  validateEmail(value) {
    return EMAIL_PATTERN.test(value) ? null : "Enter a valid email";
  },
};

export default validator;