const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validator = {
  presence(fieldName, value) {
    return Boolean(value) ? "" : `${fieldName} can't be empty.`;
  },
  validateEmail(value) {
    return EMAIL_PATTERN.test(value) ? "" : "Enter a valid email";
  },
};

export default validator;