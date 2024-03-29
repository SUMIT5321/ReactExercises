const validator = {
  emailPattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  
  validateIsNotEmpty(...[fieldName, value]) {
    return value.length > 0 ? null : `${fieldName} can't be empty.`;
  },
  validateEmail(value) {
    return this.emailPattern.test(value) ? null : "Enter a valid email";
  },
};

export default validator;